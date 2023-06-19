import axios from "axios";
import { useEffect } from "react";
import EnvConfig from "../apis/EnvConfig";
import { toast } from "react-toastify";

const useHistory = () => {
  useEffect(() => {
    axios
      .get(EnvConfig.GETHISTORY)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => toast.error("무언가가 잘못됬다 "));
  }, []);
  return null;
};

export default useHistory;
