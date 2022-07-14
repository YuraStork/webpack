import jwtDecode from "jwt-decode";
import { SavedUserObject } from "types";

export const saveUserInStorage = (user: SavedUserObject) => {
  localStorage.setItem("user", JSON.stringify(user));
}

export const getSavedUser = (): SavedUserObject | null => {
  const user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user)
  }
  return null;
}

export const decodeJWT = (token: string) => jwtDecode(token)
