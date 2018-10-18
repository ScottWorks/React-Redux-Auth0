import axios from 'axios';

import { FETCH_PERSONLIST } from '../actions/actionTypes';

let nextPersonId = 0;

export const filters = {
  BY_GENDER: 'BY_GENDER',
  BY_STATE: 'BY_STATE',
  BY_FRIENDED: 'BY_FRIENDED'
};

export const setFilter = (filter) => ({
  type: 'SET_FILTER',
  payload: filter
});

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

export const addFriend = (personList) => ({
  // const personList = personList.filter((elem) => elem.isFriend);
  type: 'ADD_FRIEND',
  payload: personList
});
