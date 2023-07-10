import jwtDecode from "jwt-decode";
import TokenManager from "../apis/TokenManager";
import { RoleData } from "../assets/data/RoleData";

const GetRole = () => {
  const tokenManager = new TokenManager();
  const accessToken = tokenManager.accessToken;

  if (!accessToken) return "";

  const userTable = jwtDecode(accessToken);

  const setRole = RoleData.TOKEN[userTable.authority];

  return setRole;
};

export default GetRole;
