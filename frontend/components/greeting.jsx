import React from 'react';
import CreateSession from './create_session';

import { Query, Mutation } from "react-apollo";
import { ALL_ORGANIZERS, CREATE_SESSION } from "./greeting_ql";

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curOrganizer: null,
    }
    this.handleTest = this.handleTest.bind(this);
  }

  handleTest(data) {
    if (!data.createSession) return;
    const { organizer, token } = data.createSession;
    return this.setState({ "curOrganizer": organizer });
  }

  render() {
    const greeting = this.state.curOrganizer ?
    <p>Welcome {this.state.curOrganizer.fname}!</p> :
    <p>Please sign in!</p>
    return(
      <div className="greeting-div">
        {greeting}
        <CreateSession handleTest={this.handleTest}/>
      </div>
    );
  }
}

export default Greeting;
