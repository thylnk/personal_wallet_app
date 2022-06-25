import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Alert } from 'react-native';
import authApi from '~services/auth.api';
import { getAccessToken, setAccessToken } from '~shared/utils/storerage';


const initialValue = {
  accessToken: '' || getAccessToken(),
  isSignIn: false,
}

export const login = createAsyncThunk('user/login', async (params, thunkAPI) => {
  try {
    const response = await authApi.login(params)
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue({ message: error?.response?.data?.detail || "Error", status: error.response.status })
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: initialValue,
  reducers: {},
  extraReducers: {
    [login.rejected]: (state, action) => {
      state.isSignIn = false;
      state.accessToken = ""
      if (action.payload.status !== 200) {
        alert("Incorrect username or password")
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
    },
  }
});

const userReducer = userSlice.reducer;
export default userReducer;