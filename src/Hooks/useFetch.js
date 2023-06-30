import { useCallback, useState } from "react";
import API from "../apis";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

const useFetch = (
  url,
  method,
  successMessage,
  errors,
  onSuccess,
  onFailure
) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  console.log(url);

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
        if (!(e instanceof AxiosError)) {
          toast.error("알 수 없는 에러가 발생하였습니다.");
          console.log(e);
          return;
        }

        if (e.response && e.response.status >= 500) {
          toast.error("알 수 없는 에러가 발생했습니다");
        } else if (typeof errors === "string") {
          toast.error(errors);
        } else if (errors && e.response && errors[e.response.status]) {
          toast.error(errors[e.response.status]);
        }

        if (onFailure) await onFailure(e);
      } finally {
        setIsLoading(false);
      }
    },
    [url, method, onSuccess, onFailure, successMessage, errors]
  );

  return { fetch, isLoading, data };
};

export default useFetch;
