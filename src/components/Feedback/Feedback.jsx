import React, { Component } from "react";

export class Feedback extends Component {
  static defaultProps = {};
  static propTypes = {};

  render() {
      return (
        <div>
          <h1>Espresso Coffee asks for your feedback!</h1>
          <button>Positive</button>
          <button>Neutral</button>
          <button>Negative</button>
        </div>
      );
  }
}