import { RECEIVE_CURRENT_ORGANIZER, RECEIVE_ERRORS, CLEAR_ERRORS} from '../actions/session_actions';
import merge from 'lodash/merge';

let nullOrganizer = { currentOrganizer: null, errors: [] };

const SessionReducer = (state = nullOrganizer, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_ORGANIZER:
      return merge({}, state, { currentOrganizer: action.currentOrganizer });
    case RECEIVE_ERRORS:
      return merge({}, state, { errors: action.errors });
    case CLEAR_ERRORS:
      return nullOrganizer;
    default:
      return state;
  }
};


export default SessionReducer;
