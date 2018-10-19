import { SET_FILTER, SHOW_ALL } from '../actions/actionTypes';

const initialState = {
  activeFilter: SHOW_ALL
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return { activeFilter: action.payload };
    default:
      return state;
  }
};

export default filterReducer;
