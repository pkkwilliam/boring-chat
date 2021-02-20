import React, { Component } from "react";

export const Context = React.createContext();

export default class ApplicationStateContext extends Component {
  state = {
    isAuthenticated: true,
    user: {
      name: "Joe Smith",
      email: "joe.smith@here.com",
    },
  };

  render() {
    const { isAuthenticated, user } = this.state;
    return (
      <Context.Provider
        value={{
          isAuthenticated,
          user: {
            ...user,
            setUser: this.setUser,
          },
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }

  setUser = (name, email) => {
    this.setState({
      user: {
        name,
        email,
      },
    });
  };
}
