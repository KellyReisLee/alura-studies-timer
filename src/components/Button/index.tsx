import React from 'react';
import style from './button.style.module.scss';

type ButtonProps = {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void
};

const Button: React.FC<ButtonProps> = ({ text, type = 'button', onClick }) => {
  return (
    <button onClick={onClick} type={type} className={style.button}>
      {text}
    </button>
  );
};

export default Button;
