import axios from 'axios';

import { FETCH_PERSONLIST, LIST_SELECT } from './actionTypes';

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

// export const listSelect = (type) => ({
//   type: LIST_SELECT,
//   payload: type
// });

export const addFriend = (personList) => ({
  // const personList = personList.filter((elem) => elem.isFriend);
  type: 'ADD_FRIEND',
  payload: personList
});
