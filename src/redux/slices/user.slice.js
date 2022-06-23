import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authApi from '~services/auth.api';

const initialValue = {
  accessToken: '',
  isSignIn: false,
}

export const login = createAsyncThunk('user/login', async (params, thunkAPI) => {
  // thunkAPI.dispatch(...)
  const res = await authApi.login(params)
  return res;
});

const userSlice = createSlice({
  name: 'user',
  initialState: initialValue,
  reducers: {},
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.accessToken = action.payload;
      state.isSignIn = true
      console.log(action.payload)
    },
  }
});

export const { userAction } = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;