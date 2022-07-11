import jwtDecode from "jwt-decode";

export const setToken = (token: string) => localStorage.setItem("token", token);
export const getToken = () => localStorage.getItem("token");
export const decodeJWT = (token: string) => jwtDecode(token)
