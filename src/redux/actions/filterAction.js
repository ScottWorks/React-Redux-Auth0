import {
  BY_GENDER,
  BY_STATE,
  BY_FRIENDED,
  SET_FILTER
} from './personListAction';

export const filters = {
  BY_GENDER,
  BY_STATE,
  BY_FRIENDED
};

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter
});
