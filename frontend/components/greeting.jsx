import React from 'react';
import CreateSession from './create_session';

import { Query, Mutation } from "react-apollo";
import { ALL_ORGANIZERS, CREATE_SESSION } from "./greeting_ql";

/*
<Query
  query={ALL_ORGANIZERS}
>
  {({ loading, error, data }) => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.allOrganizers.map(({ id, fname }) => (
      <div key={id}>
        <p>{`${fname}`}</p>
      </div>
    ));
  }}
</Query>

<Mutation mutation={CREATE_SESSION} variables={{ email: "hallo@moto.com", password: "hallomoto" }}>
  {(payload) => (
    <button onClick={console.log(payload.token)}>
      TEST
    </button>
  )}
</Mutation >
*/
class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="greeting-div">
        <p>Greetings from Greeting!</p>
        <CreateSession/>
      </div>
    );
  }
}

export default Greeting;
