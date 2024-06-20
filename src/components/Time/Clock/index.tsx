import { timerConversor } from '../../../common/utils/date'
import style from './clock.style.module.scss'



type Props = {
  timer: number;

}

const Clock = ({ timer = 0, }: Props) => {
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  const [minutesDez, minutesUni] = String(minutes).padStart(2, '0')
  const [secondDez, secondUni] = String(seconds).padStart(2, '0')
  console.log(minutesDez, minutesUni, secondDez, secondUni, minutes, seconds)
  console.log('Conversor', timerConversor('01:01:01'), timer)
  return (
    <>
      <span className={style.clockNumber}>{minutesDez}</span>
      <span className={style.clockNumber}>{minutesUni}</span>
      <span className={style.clockDivison}>:</span>
      <span className={style.clockNumber}>{secondDez}</span>
      <span className={style.clockNumber}>{secondUni}</span>
    </>
  )
}

export default Clock