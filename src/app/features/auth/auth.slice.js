import { createSlice } from "@reduxjs/toolkit";
import TokenService from "../../../utils/token-service";

const accessToken = TokenService.getAccessToken();

const initialState = {
  state: {
    isFetching: false,
  },
  token: accessToken,
  user: TokenService.getUser(),
  isAuthenticated: accessToken ? true : false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsFetching: (state) => {
      state.state.isFetching = true;
    },
    login: (state, payload) => {
      state.token = payload;
      state.user = TokenService.getUser();
      state.isAuthenticated = true;
    },
  },
});

export const { setIsFetching, login } = authSlice.actions;

export default authSlice.reducer;
