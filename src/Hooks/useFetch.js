import { useCallback, useState } from "react";
import API from "../apis";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

const useFetch = (url, method, successMessage, erros, onSuccess, onFailure) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetch = useCallback(
    async body => {
      setIsLoading(true);
      try {
        const { data } = await API({
          url,
          method,
          data: body,
        });

        if (successMessage) toast.success(successMessage);

        setData(data);
        if (onSuccess) await onSuccess(data);
      } catch (e) {
        if (!AxiosError(e)) {
          toast.error("알 수 없는 에러가 발생하였습니다.");
          return;
        }

        if (onFailure) await onFailure(e);
      } finally {
        setIsLoading(false);
      }
    },
    [url, method, onSuccess, onFailure, successMessage]
  );

  return { fetch, isLoading, data };
};

export default useFetch;
