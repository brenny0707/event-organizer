import React from 'react';

import { Mutation } from "react-apollo";
import { CREATE_SESSION } from "./greeting_ql";

class CreateSession extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    "curOrganizer": null,
    "email": '',
    "password": '',
    }
  this.update = this.update.bind(this);
  }

update(prop) {
  return (e) => {
    e.preventDefault();
    e.stopPropagation();
    return this.setState({ [prop]: e.target.value })
  }
}
  render() {
    return(
      <div>
        <input
          className="greeting-email-input"
          value={this.state.email}
          onChange={this.update("email")}
          type="text"
          placeholder="Email"
        />
        <input
          className="greeting-pw-input"
          value={this.state.password}
          onChange={this.update("password")}
          type="password"
          placeholder="Password"
        />
        <Mutation 
        mutation={CREATE_SESSION} 
        variables={{ email: this.state.email, password: this.state.password }}
        onCompleted={data => this.props.handleTest(data)}>
          {(createSession) => (
            <button onClick={createSession}>
              TEST
            </button>
          )}
        </Mutation>
      </div>
    )
  }
  
}

export default CreateSession;