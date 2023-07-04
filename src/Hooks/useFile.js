import { useCallback, useState } from "react";
import API from "../apis";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

const useFile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [imgUrl, setImgUrl] = useState("");

  const upload = useCallback(async file => {
    const formData = new FormData();
    file.forEach(f => {
      formData.append("key", f);
    });

    try {
      const { data } = await API.post("/file", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setIsLoading(false);

      toast.success("이미지 변환 성공");
      setImgUrl(data.awsUrl);
    } catch (e) {
      if (!(e instanceof AxiosError)) {
        toast.error("이미지를 변환할 수 없습니다.");
        return;
      }
      if (e.response && e.response.status >= 500) {
        toast.error("서버에 문제가 생겼습니다.");
      }
      setIsLoading(true);
    }
  }, []);

  return { upload, isLoading, imgUrl };
};

export default useFile;
