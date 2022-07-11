import { handleAuthorization } from "api/user.api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { decodeJWT, setToken } from "services/token.service";
import { UserData, UserLoginData } from "types";
import { is } from "superstruct"
import { UserStructure } from "utils/superStruct";

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isReady] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = decodeJWT(token);
      if (is(user, UserStructure)) {
        setUserData({ token, user });
        setIsAuth(true);
        navigate("/home")
      }
    }
  }, [])

  async function login(data: UserLoginData) {
    try {
      const res = await handleAuthorization(data);
      setToken(res.data.token);
      setIsAuth(true);
      setUserData(res.data);
      navigate("/home");
    } catch (e) {
      setIsAuth(false);
      setUserData(null);
    }
  }



  return { isAuth, isReady, userData, login };
};
