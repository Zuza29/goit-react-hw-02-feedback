import { Component } from 'react';
import css from './FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  render() {
    const {  onLeaveFeedback } = this.props;
    return (
      <>
        <h1>Espresso Coffee</h1>
        <p>asks for your feedback!</p>
        <button className={css.button} type="button" onClick={onLeaveFeedback}>
          Positive
        </button>
        <button className={css.button} type="button" onClick={onLeaveFeedback}>
          Neutral
        </button>
        <button className={css.button} type="button" onClick={onLeaveFeedback}>
          Negative
        </button>
      </>
    );
  }
}
