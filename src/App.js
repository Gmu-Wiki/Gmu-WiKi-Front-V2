import { useNavigate } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import { GauthProvider } from "@msg-team/gauth-react";
import API from "./apis";
import EnvConfig from "./apis/EnvConfig";
import React from "react";
import Router from "./router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const navigate = useNavigate();

  return (
    <GauthProvider
      redirectUri={EnvConfig.REDIRECTURL}
      clientId={EnvConfig.CLIENTID}
      onSuccess={async code => {
        const {
          data: { accessToken, refreshToken },
        } = await API.post("/auth", {
          code,
        });

        localStorage.setItem("GMUWIKI_accessToken", accessToken);
        localStorage.setItem("GMUWIKI_refreshToken", refreshToken);

        navigate("/");
      }}
    >
      <GlobalStyle />
      <Router />

      <ToastContainer />
    </GauthProvider>
  );
}

export default App;
