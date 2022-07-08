import { createContext } from "react";
import { AuthContextTypes, UserLoginData } from "types";

export const AuthContext = createContext<AuthContextTypes>({ isAuth: false, isReady: false, login: (data:UserLoginData) => { }, userData: null })