import { AuthContext } from "context/auth.context"
import { useAuth } from "hooks/auth.hook";
import { Router } from "./router"

export const App = () => {
  const { isAuth, isReady, login, userData } = useAuth();
  return <AuthContext.Provider value={{ isAuth, isReady, login, userData }} >
    <Router />
  </AuthContext.Provider>
}