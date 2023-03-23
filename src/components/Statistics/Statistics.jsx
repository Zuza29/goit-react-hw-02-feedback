import React from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ total, positiveFeedback, positive, neutral, negative }) => {
  return (
    <div className={css.stats}>
      <ul className={css.statsList}>
        <li>Positive: {positive}</li>
        <li>Neutral: {neutral}</li>
        <li>Negative: {negative}</li>
      </ul>
      <p>Total: {total}</p>
      <p>Positive feedback: {positiveFeedback}</p>
    </div>
  );
};

Statistics.propTypes = {
  total: PropTypes.number,
  positiveFeedback: PropTypes.string,
};
