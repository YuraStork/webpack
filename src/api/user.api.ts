import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { UserLoginData, UserRegistrationData } from "types";
import { API } from "./const";

export const handleAuthorization = async (data: UserLoginData) => {
  try {
    const res = await axios.post(`${API}/user/login`, data);
    toast.success("Sing in success");
    return res;
  } catch (e: AxiosError | any) {
    toast.error(((e as AxiosError).response?.data as string) || "Error");
    throw e;
  }
};

export const handleRegistration = async (data: UserRegistrationData) => {
  try {
    const res = await axios.post(`${API}/user/register`, data);
    toast.success("Sing up success");
    return res;
  } catch (e) {
    console.log("Error", e);
    toast.error(((e as AxiosError).response?.data as string) || "Error");
    throw e;
  }
};
