import { createSlice } from "@reduxjs/toolkit";

/**
 * const developmentUserValues = {
    user: { walletAddress: "0x9979A76e0BdC2491c023f84244d7Bdc2EfDB3FD2" },
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsiYWNjb3VudEFkZHJlc3MiOiJoZWxsbyIsIl9pZCI6IjY0NTUzZjkxYTUzM2Y2OTRjZmZlMTYyNCIsImNyZWF0ZWRBdCI6IjE2ODMzMDg0MzMyODQiLCJfX3YiOjB9LCJpYXQiOjE2ODMzMDg0MzN9.f_Y5WKQQqCD89uFvMWHrPEQeY-e46nNlmDg-lWnXWjA",
  };
 * 
 */

const initialState = {
  user: { walletAddress: "0x9979A76e0BdC2491c023f84244d7Bdc2EfDB3FD2" },
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsiX2lkIjoiNjQ1NWU0OTFkZjBjNWZiNzU0ZmQwZDU2IiwiYWNjb3VudEFkZHJlc3MiOiIweDk5NzlBNzZlMEJkQzI0OTFjMDIzZjg0MjQ0ZDdCZGMyRWZEQjNGRDIifSwiaWF0IjoxNjgzNTY4NDU3fQ.4GoHxny88aIEEsbI1Q0uiCJx6tYBqTMiKF154ioFvCE",
};

export const userSlice = createSlice({
  name: "appUser",
  initialState,

  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },

    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setToken, setUser } = userSlice.actions;

export const appTokenState = (state) => state["appUser"].token;
export const userSelector = (state) => state["appUser"].user;

export default userSlice.reducer;
