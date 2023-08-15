import { useLogin } from "../../Hooks";
import * as C from "../../components";

function Promotion() {
  useLogin();
  return <C.PromotionPage />;
}

export default Promotion;
