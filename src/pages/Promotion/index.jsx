import { useLogin } from "../../Hooks";
import * as C from "../../components";

function Promotino() {
  useLogin();
  return <C.PromotionPage />;
}

export default Promotino;
