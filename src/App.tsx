import { useState } from 'react';
import style from './App.style.module.scss';
import Form from './components/Form';
import List from './components/List';
import Time from './components/Time';
import { ListType } from './types/task';

function App() {
  const [taskData, setTaskData] = useState<ListType[]>([]);
  const [selectedOb, setSelectedOb] = useState<ListType>();

  const handleSelectedTask = (taskSelected: ListType) => {
    setSelectedOb(taskSelected);
    setTaskData((prev) =>
      prev.map((item) => ({
        ...item,
        selected: item.id === taskSelected.id ? true : false,
      }))
    );
  };

  function finishTask() {
    if (selectedOb) {
      setSelectedOb(undefined)
      setTaskData(prev => prev.map((item) => {
        if (item.id === selectedOb.id) {
          return {
            ...item, selected: false, completed: true
          }
        }
        return item
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTaskData} />
      <List list={taskData} onSelectTask={handleSelectedTask} />
      <Time selectedOb={selectedOb} finishTask={finishTask} />
    </div>
  );
}

export default App;
