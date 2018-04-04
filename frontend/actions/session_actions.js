import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_ORZANIZER = 'RECEIVE_CURRENT_ORZANIZER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const CLEAR_STATE = 'CLEAR_STATE';

//regular action creators
export const receiveCurrentOrganizer = (currentOrganizer) => {
  return {
    type: RECEIVE_CURRENT_ORZANIZER,
    currentOrganizer,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors,
  };
};

export const clearState = () => {
  return {
    type: CLEAR_STATE,
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

//thunk action creators
export const login = (organizer) => dispatch => {
  return APIUtil.login(organizer)
    .then(organizer => dispatch(receiveCurrentOrganizer(organizer)),
    errors => {
      dispatch(clearErrors());
      dispatch(receiveErrors(errors.responseJSON));
    });
};

export const logout = () => dispatch => {
  return APIUtil.logout()
    .then(organizer => {
      dispatch(receiveCurrentOrganizer(null));
      dispatch(clearErrors());
    });
};
