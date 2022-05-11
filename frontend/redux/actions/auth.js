import jsCookie from "js-cookie";
import api from "../../lib/api";
import { auth_types } from "../types";

export const userLogin = (values) => {
  return async (dispatch) => {
    try {
      const res = await api.post("/auth/login", {
        username: values.username,
        password: values.password,
      });

      const userResponse = res.data.result;

      jsCookie.set("auth_token", userResponse.token);

      dispatch({
        type: auth_types.LOGIN_USER,
        payload: userResponse.user,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
