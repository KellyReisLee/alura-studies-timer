import React from 'react'
import style from './button.style.module.scss'

const Button: React.FC<{ text: string }> = ({ text }) => {
  return (
    <button className={style.botao}>
      {text}
    </button>
  )
}

export default Button;