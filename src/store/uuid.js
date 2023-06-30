import { createSlice } from "@reduxjs/toolkit";

const initialState = "";
const uuidSlice = createSlice({
  name: "uuid",
  initialState,
  reducers: {
    setUuid: (state, action) => {
      state = action.payload;
      return state;
    },
    removeUuid: () => {
      return initialState;
    },
  },
});

export const { setUuid, removeUuid } = uuidSlice.actions();

export default uuidSlice;
