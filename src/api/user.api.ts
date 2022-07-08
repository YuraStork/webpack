import axios from "axios";
import { UserLoginData, UserRegistrationData } from "types";
import { API } from './const';

export const handleAuthorization = async (data: UserLoginData) => {
  try {
    const res = await axios.post(`${API}/user/login`, data);
    return res;
  }
  catch (e) {
    throw e;
  }
}

export const handleRegistration = async (data: UserRegistrationData) => {
  try {
    const res = await axios.post(`${API}/user/register`, data);
    return res;
  }
  catch (e) {
    throw e;
  }
}