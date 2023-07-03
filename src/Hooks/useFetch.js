import { useCallback, useState } from "react";
import API from "../apis";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import TokenManager from "../apis/TokenManager";

const useFetch = options => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [isLogIn, setIsLogIn] = useState(false);

  const isLoggedIn = () => {
    const tokenManager = new TokenManager();
    return tokenManager.initToken();
  };

  const checkLoggedIn = () => {
    const tokenManager = new TokenManager();
    const loggedIn = tokenManager.initToken();
    setIsLogIn(loggedIn);
  };

  const fetch = useCallback(
    async body => {
      if (options.skipIfLoggedIn && isLoggedIn()) {
        return;
      }

      setIsLoading(true);
      try {
        const { data } = await API({
          url: options.url,
          method: options.method,
          data: body,
        });

        if (options.successMessage) toast.success(options.successMessage);

        setData(data);
        if (options.onSuccess) await options.onSuccess(data);
      } catch (e) {
        if (!(e instanceof AxiosError)) {
          toast.error("알 수 없는 에러가 발생하였습니다.");
          console.log(e);
          return;
        }

        if (e.response && e.response.status >= 500) {
          toast.error("알 수 없는 에러가 발생했습니다");
        } else if (typeof errors === "string") {
          toast.error(options.errors);
        } else if (
          options.errors &&
          e.response &&
          options.oerrors[e.response.status]
        ) {
          toast.error(options.errors[e.response.status]);
        }

        if (options.onFailure) await options.onFailure(e);
      } finally {
        setIsLoading(false);
      }
    },
    [
      options.url,
      options.method,
      options.onSuccess,
      options.onFailure,
      options.successMessage,
      options.errors,
      options.skipIfLoggedIn,
    ]
  );

  const handleFetch = () => {
    if (!isLogIn) {
      toast.error("권한이 없습니다. 로그인이 필요합니다.");
      return;
    }
  };

  return { fetch, isLoading, data };
};

export default useFetch;
