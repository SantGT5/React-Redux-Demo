import axios from "axios";

import {
  FECH_USERS_REQUEST,
  FECH_USERS_SUCCESS,
  FECH_USERS_FAILURE,
} from "./userTypes";

export const fecthUsersRequest = () => {
  return {
    type: FECH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FECH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FECH_USERS_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fecthUsersRequest);

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUsersFailure(errorMsg));
      });
  };
};
