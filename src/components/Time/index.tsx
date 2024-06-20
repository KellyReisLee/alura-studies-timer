
import Button from '../Button'
import Clock from './Clock'
import style from './time.style.module.scss'
import { ListType } from '../../types/task'
import { useState, useEffect } from 'react'
import { timerConversor } from '../../common/utils/date'

type Props = {
  selectedOb: ListType | undefined;
  finishTask: () => void;

}

const Time = ({ selectedOb, finishTask }: Props) => {
  const [timer, setTimer] = useState<number>(0);


  useEffect(() => {
    if (selectedOb?.time) {
      setTimer(timerConversor(selectedOb.time))
    }
  }, [selectedOb])
  console.log(timer)

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTimer(contador - 1);
        return regressiva(contador - 1);
      }
      finishTask()

    }, 1000)
  }


  return (
    <div className={style.time}>
      <p className={style.title}>Choose one card and start the time:</p>
      Tempo: {timer}
      <div className={style.clockWrapper}>

        <Clock timer={timer} />

      </div>
      <Button onClick={() => regressiva(timer)} text='Start' />
    </div>
  )
}

export default Time