import React from 'react'
import Button from '../Button'
import style from './form.style.module.scss'

const Form: React.FC = () => {
  return (
    <form className={style.novaTarefa}>
      {/* First */}
      <div className={style.inputContainer} >
        <label htmlFor='task'>Add a new study:</label>
        <input type='text' name='task' id='task' placeholder='What do you want learn?' required />
      </div>
      {/* Second */}
      <div className={style.inputContainer}>
        <label htmlFor='time'></label>
        <input type='time' step='1' name='time' id='time' min='00:00:00' max='01:30:00' required />
      </div>
      <Button text='Adicionar' />
    </form>
  )
}

export default Form