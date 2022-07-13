import { getUser, handleAuthorization } from "api/user.api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { decodeJWT, setToken } from "services/token.service";
import { UserData, UserLoginData } from "types";
import { is } from "superstruct"
import { UserTokenStructure } from "utils/superStruct";

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const navigate = useNavigate();

  const initializationUser = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = decodeJWT(token);
      if (is(user, UserTokenStructure)) {
        const { data } = await getUser(user.id);
        if (data) {
          setUserData({ token, user: { ...data } });
          setIsAuth(true);
          navigate("/")
        }
      }
    }
    setIsReady(true);
  }

  useEffect(() => {
    initializationUser()
  }, [])

  async function login(data: UserLoginData) {
    try {
      setIsLoading(true);
      const res = await handleAuthorization(data);
      setToken(res.data.token);
      setIsAuth(true);
      setUserData(res.data);
      navigate("/home");
    } catch (e) {
      setIsAuth(false);
      setUserData(null);
    }
    finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuth(false)
    setUserData(null);
  }


  return { isAuth, isReady, userData, login, logout, isLoading };
};
