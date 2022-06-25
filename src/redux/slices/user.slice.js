import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Alert } from 'react-native';
import authApi from '~services/auth.api';
import { getAccessToken, setAccessToken } from '~shared/utils/storerage';


const initialValue = {
  accessToken: '',
  isSignIn: false,
}

export const login = createAsyncThunk('user/login', async (params, thunkAPI) => {
  try {
    const response = await authApi.login(params);
    return response;
  } catch (error) {
    console.log(error)
    return thunkAPI.rejectWithValue(error.response.status)
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
      if (action.payload) {
        console.log(action.payload)
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
      setAccessToken(access);
      console.log(access);
    },
  }
});

export const { logout } = userSlice.actions
const userReducer = userSlice.reducer;
export default userReducer;