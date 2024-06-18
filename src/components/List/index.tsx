import React from 'react'
import style from './list.style.module.scss'

const List: React.FC = () => {

  const tasks = [
    {

      task: 'React - Learn more about it.',
      time: '02:00:00'
    },
    {

      task: 'Javascript - Studies',
      time: '01:00:00'
    },
    {

      task: 'CSS - Animations',
      time: '01:30:00'
    },

  ]
  return (
    <aside className={style.listaTarefas}>
      <h2>Daily Studies:</h2>
      <ul>
        {
          tasks.map((item, index) => (
            <li className={style.item} key={index}>
              <h3>
                {item.task}

              </h3>
              <span>
                {item.time}
              </span>
            </li>
          ))
        }
      </ul>
    </aside>
  )
}

export default List