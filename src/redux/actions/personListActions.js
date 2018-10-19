import axios from 'axios';

import { FETCH_PERSONLIST, TOGGLE_FRIEND } from './actionTypes';

let nextPersonId = 0;

export const fetchPersonList = () => {
  const personList = axios.get('/api/users').then((axiosRes) => {
    return axiosRes.data[0].map((elem) => {
      return {
        id: nextPersonId++,
        data: elem,
        isFriend: false
      };
    });
  });

  return {
    type: FETCH_PERSONLIST,
    payload: personList
  };
};

export const toggleFriend = (id) => ({
  type: TOGGLE_FRIEND,
  payload: id
});
