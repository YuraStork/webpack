import { AuthorizedUser } from "./../../types";
import { USER_REDUCER } from "../const";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getSavedUser, saveUserInStorage } from "services/token.service";
import { SavedUserObject } from "types";
import { getUserProfileThunk, updateUserProfileThunk, UserLoginThunk } from "store/thunks/user.thunk";

type initialStateTypes = {
  isAuth: boolean,
  isLoading: boolean,
  error: null | string,
  token: null | string,

  data: {
    id: null | string,
    avatar: null | string,
    backgroundFon: null | string,
    name: null | string,
    age: null | number,
    role: null | string,
    email: null | string,
    country: null | string,
    city: null | string,
    color: null | string,
    gender: null | string,
    date: null | string,
    biography: null | string,
  }
}

const initialState: initialStateTypes = {
  isAuth: false,
  error: null,
  isLoading: false,
  token: null,

  data: {
    id: null,
    avatar: null,
    backgroundFon: null,
    name: null,
    age: null,
    role: null,
    email: null,
    country: null,
    city: null,
    color: null,
    gender: null,
    date: null,
    biography: null,
  }
}

export const UserReducer = createSlice({
  name: USER_REDUCER,
  initialState,
  reducers: {
    initializeUser: (state) => {
      const user = getSavedUser();
      if (user) {
        state.token = user.token;
        state.data.id = user.user.id;
        state.data.name = user.user.name;
        state.data.role = user.user.role;
        state.isAuth = true;
      }
    },
    logout: (state) => {
      localStorage.removeItem("user");
      state.data = initialState.data;
      state.isAuth = false;
      state.token = null;
    }
  },

  extraReducers: builder => {
    builder.addCase(UserLoginThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    builder.addCase(UserLoginThunk.fulfilled, (state, { payload }: PayloadAction<SavedUserObject>) => {
      state.token = payload.token;
      state.data.id = payload.user.id;
      state.data.name = payload.user.name;
      state.data.role = payload.user.role;
      state.error = null;
      state.isAuth = true;
      state.isLoading = false;
      saveUserInStorage(payload);
    })
    builder.addCase(UserLoginThunk.rejected, (state) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = "Error";
    })

    builder.addCase(getUserProfileThunk.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(getUserProfileThunk.fulfilled, (state, { payload }: PayloadAction<AuthorizedUser>) => {
      state.isLoading = false;
      state.data = { ...payload };
    })
    builder.addCase(getUserProfileThunk.rejected, (state) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = "Error";
    })

    builder.addCase(updateUserProfileThunk.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(updateUserProfileThunk.fulfilled, (state) => {
      state.isLoading = false;
    })
    builder.addCase(updateUserProfileThunk.rejected, (state) => {
      state.isLoading = false;
      state.error = "Error";
    })
  }
})

export const { initializeUser, logout } = UserReducer.actions;