
import Button from '../Button'
import Clock from './Clock'
import style from './time.style.module.scss'
import { ListType } from '../../types/task'
import { useState, useEffect } from 'react'
import { timerConversor } from '../../common/utils/date'

type Props = {
  selectedOb: ListType | undefined;

}

const Time = ({ selectedOb }: Props) => {
  const [timer, setTimer] = useState<number>(0);


  useEffect(() => {
    if (selectedOb?.time) {
      setTimer(timerConversor(selectedOb.time))
    }
  }, [timer, selectedOb])
  console.log(timer)

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (timer !== null && timer > 0) {
      interval = setInterval(() => {
        setTimer(prevTimer => (prevTimer !== null && prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1000);
    }

    return () => clearInterval(interval); // Limpar o intervalo quando o componente for desmontado ou o timer mudar
  }, [timer]);

  const regressiva = () => {
    if (selectedOb?.time) {
      setTimer(timerConversor(selectedOb.time));
    }
  };



  return (
    <div className={style.time}>
      <p className={style.title}>Choose one card and start the time:</p>
      Tempo: {timer}
      <div className={style.clockWrapper}>

        <Clock timer={timer} />

      </div>
      <Button onClick={regressiva} text='Start' />
    </div>
  )
}

export default Time