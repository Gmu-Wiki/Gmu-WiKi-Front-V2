import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import TokenManager from "../apis/TokenManager";
import observable from "../lib/Observable";
import axios from "axios";
import EnvConfig from "../apis/EnvConfig";

export const reissueToken = createAsyncThunk(
  "reissue/reissueToken",
  async (_, { getState, dispatch }) => {
    const tokenManager = new TokenManager();
    const { reissue } = getState();

    if (
      reissue.isLoading ||
      tokenManager.calculateMinutes(reissue.refreshDate, 1) >= new Date()
    ) {
      await new Promise(resolve => {
        observable.setObserver(resolve);
      });
      return;
    }

    dispatch(
      setRefreshTiming({ isLoading: true, refreshDate: new Date().toString() })
    );
    const { data } = await axios.patch(
      "/auth",
      {},
      {
        baseURL: EnvConfig.GMUWIKI_SERVER_URL,
        withCredentials: true,
        headers: {
          refreshToken:
            tokenManager.refreshToken && `Bearer ${tokenManager.refreshToken}`,
        },
      }
    );
    observable.notifyAll();
    observable.removeAll();

    tokenManager.setTokens(data);
    return data;
  }
);

const initialState = {
  isLoading: false,
  refreshDate: "",
};

const reissueSlice = createSlice({
  name: "reissue",
  initialState,
  reducers: {
    setRefreshTiming: (state, { payload }) => {
      state = payload;
      return state;
    },
  },
  extraReducers: builder => {
    builder.addCase(reissueToken.fulfilled, state => {
      state.isLoading = false;
      console.log("토큰 발급됨");
    });
    builder.addCase(reissueToken.rejected, state => {
      const tokenManager = new TokenManager();
      tokenManager.removeTokens();
      console.log("토큰 발급 실패");

      state.isLoading = false;
      if (window.location.pathname !== "/") window.location.href = "/";
    });
  },
});

export const { setRefreshTiming } = reissueSlice.actions;

export default reissueSlice;
