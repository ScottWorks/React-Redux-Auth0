import {
  FETCH_PERSONLIST,
  _FULFILLED,
  _REJECTED,
  _PENDING
} from '../actions/actionTypes';

const initialState = {
  personList: null,
  isPending: true,
  error: undefined
};

const personListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PERSONLIST + _FULFILLED:
      return {
        ...state,
        personList: action.payload,
        isPending: false
      };

    case FETCH_PERSONLIST + _REJECTED:
      return {
        ...state,
        isPending: false,
        error: action.payload
      };

    case FETCH_PERSONLIST + _PENDING:
    default:
      return state;
  }
};

export default personListReducer;
