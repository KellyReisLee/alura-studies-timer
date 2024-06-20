import style from './itemList.style.module.scss'
import { ListType } from '../../../types/task'

interface Props extends ListType {
  onSelectTask: (taskSelected: ListType) => void;
}

const ItemList = ({ task, time, selected, id, completed, onSelectTask }: Props) => {
  console.log({ task, time, selected, id, completed })
  return (

    <li onClick={() => !completed && onSelectTask({ task, time, selected, id, completed })} className={`${style.item} ${selected ? style.selectedItem : ''}  ${completed ? style.completedItem : ''}`} >
      <h3>
        {task}
      </h3>
      <span>
        {time}
      </span>
      {
        completed && <span className={style.completed} aria-label='completed task'></span>
      }
    </li>
  )
}

export default ItemList