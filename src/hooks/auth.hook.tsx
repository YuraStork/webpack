import { handleAuthorization } from "api/user.api";
import { useEffect, useState } from "react"
import { UserData } from "types";

export const AuthHook = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {

  }, [])

  return { isAuth, isReady, userData }
}