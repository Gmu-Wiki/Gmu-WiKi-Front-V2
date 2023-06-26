import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GauthProvider } from "@msg-team/gauth-react";
import EnvConfig from "../../apis/EnvConfig";
import Router from "./router";
import API from "./apis";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  
  return (
    <>
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
    </>
  );
}

export default App;
