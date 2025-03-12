import React from 'react';
import Styles from './Button.module.css';

const Button = ({ label, btnHandler }) => {
  return (
    <div>
      <button onClick={btnHandler}>{label}</button>
    </div>
  );
};

export default Button;
