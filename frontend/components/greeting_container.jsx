import React from 'react';
import { connect } from 'react-redux';
import Greeting from './greeting';
const mapStateToProps = (state) => {
  return {
    currentOrganizer: state.session.currentOrganizer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
