import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authApi from '~services/auth.api';
import { getAccessToken, setAccessToken } from '~shared/utils/storerage';


const initialValue = {
  accessToken: '',
  isSignIn: false,
}

export const login = createAsyncThunk('user/login', async (params, thunkAPI) => {
  try {
    const response = await authApi.login(params);
    await setAccessToken(response.access);

    return response;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.status);
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: initialValue,
  reducers: {
    logout: (state) => {
      state.isSignIn = false;
      state.accessToken = ""
    },
  },
  extraReducers: {
    [login.rejected]: (state, action) => {
      state.isSignIn = false;
      state.accessToken = ""
      if (action.payload !== 200) {
        alert("Email or password is incorrect!")
      }
    },
    [login.pending]: (state) => {
      state.isSignIn = false;
      state.accessToken = ""
    },
    [login.fulfilled]: (state, action) => {
      console.log(action.payload)
      const { access } = action.payload
      state.isSignIn = true;
      state.accessToken = access;
    },
  }
});

export const { logout } = userSlice.actions
const userReducer = userSlice.reducer;
export default userReducer;