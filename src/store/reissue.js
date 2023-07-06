import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import TokenManager from "../apis/TokenManager";
import observable from "../lib/Observable";
import axios from "axios";
import EnvConfig from "../apis/EnvConfig";
import { toast } from "react-toastify";

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
          "Refresh-Token":
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
    });
    builder.addCase(reissueToken.rejected, state => {
      const tokenManager = new TokenManager();
      tokenManager.removeTokens();
      toast.error("다시 로그인 해주세요.");

      state.isLoading = false;
      if (window.location.pathname !== "/") window.location.href = "/";
    });
  },
});

export const { setRefreshTiming } = reissueSlice.actions;

export default reissueSlice;
