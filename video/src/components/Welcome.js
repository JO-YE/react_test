import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div>
        <h1> Welcome {this.props.name} I am from a stateful Component </h1>
        {this.props.cont}
        {this.props.children}
      </div>
    );
  }
}

export default Welcome;
