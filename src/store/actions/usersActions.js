import { GET_USERS, USERS_ERROR } from "../types";
import axios from "axios";
import "regenerator-runtime/runtime";

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get(`http://jsonplaceholder.typicode.com/users`);
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: USERS_ERROR,
      payload: console.log(error),
    });
  }
};
