import React from 'react'
import style from './list.style.module.scss'
import ItemList from './ItemList.tsx'
import { ListType } from '../../types/task.ts';

type ListProps = {
  list: ListType[];
  onSelectTask: (taskSelected: ListType) => void;
};


const List: React.FC<ListProps> = ({ list, onSelectTask }) => {


  return (
    <aside className={style.listaTarefas}>
      <h2 >Daily Studies:</h2>
      <ul>
        {
          list.map((item) => (
            <ItemList onSelectTask={onSelectTask} key={item.id} {...item} />
          ))
        }
      </ul>
    </aside>
  )
}

export default List