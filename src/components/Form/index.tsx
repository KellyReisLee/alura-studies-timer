import React from 'react'
import Button from '../Button'

const Form: React.FC = () => {
  return (
    <form>
      {/* First */}
      <div>
        <label htmlFor='task'>Add a new study:</label>
        <input type='text' name='task' id='task' placeholder='What do you want learn?' required />
      </div>
      {/* Second */}
      <div>
        <label htmlFor='time'></label>
        <input type='time' step='1' name='time' id='time' min='00:00:00' max='01:30:00' required />
      </div>
      <Button />
    </form>
  )
}

export default Form