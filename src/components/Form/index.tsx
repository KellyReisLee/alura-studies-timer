import React, { ChangeEvent, FormEvent, useState } from 'react'
import Button from '../Button'
import style from './form.style.module.scss'
import { ListType } from '../../types/task'
import { v4 as uuidv4 } from 'uuid'

const Form: React.FC<{ setTasks: React.Dispatch<React.SetStateAction<ListType[]>> }> = ({ setTasks }) => {
  const [dataForm, setDataForm] = useState({
    task: '',
    time: '00:00:00'
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDataForm(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTasks((prev) => {
      return [...prev, { ...dataForm, id: uuidv4(), selected: false, completed: false }]
    })

    setDataForm({
      task: '',
      time: '00:00:00'
    })

  }

  return (
    <form onSubmit={handleSubmit} className={style.novaTarefa}>
      {/* First */}
      <div className={style.inputContainer} >
        <label htmlFor='task'>Add a new study:</label>
        <input onChange={handleChange} value={dataForm.task} type='text' name='task' id='task' placeholder='What do you want learn?' required />
      </div>
      {/* Second */}
      <div className={style.inputContainer}>
        <label htmlFor='time'></label>
        <input onChange={handleChange} value={dataForm.time} type='time' step='1' name='time' id='time' min='00:00:00' max='01:30:00' required />
      </div>
      <Button type='submit' text='Adicionar' />
    </form>
  )
}

export default Form