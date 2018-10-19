import React from 'react';

import { Query } from "react-apollo";
import gql from "graphql-tag";

class Greeting extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div className="greeting-div">
        <p>Greetings from Greeting!</p>
        <Query
          query={gql`
      {
        allOrganizers {
          id
          fname
        }
      }
    `}
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
      </div>
    );
  }
}

export default Greeting;
