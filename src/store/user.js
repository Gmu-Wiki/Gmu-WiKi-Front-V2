import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  email: "",
  name: "",
  grade: 0,
  classNum: 0,
  number: 0,
  role: "ROLE_STUDENT",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state = action.payload;
      return state;
    },
    setUserProfile: (state, action) => {
      state = { ...state, ...action.payload };
      return state;
    },
    removeUser: () => {
      return initialState;
    },
  },
});

export const { setUser, setUserProfile, removeUser } = userSlice.actions;

export default userSlice;
