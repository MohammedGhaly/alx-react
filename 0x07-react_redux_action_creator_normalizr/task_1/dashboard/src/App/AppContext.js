import { createContext } from "react";

export const defaultUser = { email: "", password: "", isLoggedIn: false };
export const defaultLogOut = () => {
  console.log("logged out");
};

export const appContext = createContext({
  user: defaultUser,
  logOut: defaultLogOut,
});
