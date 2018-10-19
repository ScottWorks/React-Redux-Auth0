import { SET_FILTER } from './actionTypes';

export const filters = {
  BY_GENDER: 'Gender',
  BY_STATE: 'State',
  BY_FRIENDED: 'Strangers',
  SHOW_ALL: 'Show All'
};

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter
});
