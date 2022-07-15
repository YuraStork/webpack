import { UserLoginFormData } from "./../../types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { USER_REDUCER } from "store/const";
import { handleAuthorization } from "api/user.api";

export const UserLoginThunk = createAsyncThunk(
  `${USER_REDUCER}/login-thunk`,
  async (data: UserLoginFormData, thunkAPI) => {
    const response = await handleAuthorization(data);
    if(!response?.data){
      return thunkAPI.rejectWithValue("Error in")
    }
    return response.data;
  }
)