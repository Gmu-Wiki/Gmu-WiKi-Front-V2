import { useCallback, useState } from "react";
import API from "../apis";
import { toast } from "react-toastify";

const useFile = () => {
  const [isLoading, setIsLoading] = useState(false);

  const upload = useCallback(async file => {
    setIsLoading(true);

    const formData = new FormData();
    file.forEach(f => {
      formData.append(f);
    });

    try {
      const { data } = await API.post("/file", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setIsLoading(false);

      toast.success("이미지 변환 성공");
      return data.images;
    } catch (e) {
      toast.error("이미지 변환 실패");
      setIsLoading(false);
    }
  }, []);

  return { upload, isLoading };
};

export default useFile;
