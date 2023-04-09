import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: null, token: null };

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
