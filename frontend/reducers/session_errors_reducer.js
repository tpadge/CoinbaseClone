import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS } from '../actions/session_actions';

const sessionErrorsReducer = (state = [], action) => { //oof?
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return Object.assign([], action.errors);

    case CLEAR_ERRORS:
      return [];
    default: 
      return state;
  }
};

export default sessionErrorsReducer;