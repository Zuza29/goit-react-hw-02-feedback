import React, { Component } from 'react';

export class Statistics extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  state = {
    positive: this.props.initialValue,
    neutral: this.props.initialValue,
      negative: this.props.initialValue,
      total: 0,
      positiveFeedback: 0,
    };
    
    countTotalFeedback() {

    }

    countPositiveFeedbackPercentage() {
        
    }

  render() {
    return (
      <div>
        <h1>Stats</h1>
        <p>Positive: {this.state.positive}</p>
        <p>Neutral: {this.state.neutral}</p>
            <p>Negative: {this.state.negative}</p>
            <p>Total: {this.state.total}</p>
            <p>Positive feedback: {this.state.positiveFeedback}</p>
      </div>
    );
  }
}
