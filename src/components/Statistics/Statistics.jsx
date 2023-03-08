import React, { Component } from 'react';
import css from './Statistics.module.css';

export class Statistics extends Component {

  render() {
    const { positive, negative, neutral, total, positiveFeedback } = this.props;
    return (
      <div className={css.stats}>
        <h2>Stats</h2>
        <p>Positive: {positive}</p>
        <p>Neutral: {neutral}</p>
            <p>Negative: {negative}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positiveFeedback}</p>
      </div>
    );
  }
}
