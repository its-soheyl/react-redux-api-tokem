import axios from 'axios';
import store from '../store';
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_USERS_TOKEN,
} from './userTypes';

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUserToken = (token) => {
  return {
    type: FETCH_USERS_TOKEN,
    payload: token,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const fetchUser = () => {
  return (dispatch) => {
    const token = store.getState().user.token;
    dispatch(fetchUsersRequest());
    axios
      .get('/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const user = res.data;
        dispatch(fetchUsersSuccess(user));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(fetchUsersFailure(error));
      });
  };
};
