import {
  FETCH_PERSONLIST,
  TOGGLE_FRIEND,
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
    case TOGGLE_FRIEND:
      return {
        personList: state.personList.map(
          (elem) =>
            elem.id === action.payload
              ? { ...elem, isFriend: !elem.isFriend }
              : elem
        )
      };

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
