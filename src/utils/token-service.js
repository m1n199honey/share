import { jwtDecode } from "jwt-decode";

const getAccessToken = () => {
  try {
    const accessToken = localStorage.getItem("token");
    return accessToken;
  } catch (error) {
    return null;
  }
};

const getUser = () => {
  try {
    const accessToken = localStorage.getItem("token");
    return jwtDecode(accessToken);
  } catch (error) {
    return null;
  }
};

const TokenService = { getAccessToken, getUser };

export default TokenService;
