import { handleAuthorization } from "api/user.api";
import { AxiosError } from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { setToken } from "services/token.service";
import { UserData, UserLoginData } from "types";
import { cryptoSha256 } from "utils/cryptoPassord";

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const navigate = useNavigate();

  async function login(data: UserLoginData) {
    try {
      console.log("DATA", data)
      const res = await handleAuthorization(data);
      setToken(res.data.token);
      setIsAuth(true);
      setUserData(res.data);
      navigate('/home');
    }
    catch (e) {
      setIsAuth(false);
      setUserData(null);
    }
  }

  return { isAuth, isReady, userData, login }
}