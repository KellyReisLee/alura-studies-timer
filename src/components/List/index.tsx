import React from 'react'

const List: React.FC = () => {

  const tasks = [
    {
      id: 1,
      task: 'react - learn more about it.',
      time: '02:00:00'
    },
    {
      id: 2,
      task: 'Javascript - Studies',
      time: '01:00:00'
    },

  ]
  return (
    <aside>
      <h2>Daily Studies:</h2>
      <ul>
        {
          tasks.map((item) => (
            <li key={item.id}>
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