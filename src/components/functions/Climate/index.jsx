import { useContext } from 'react'
import { WeatherContext } from '../../../contexts/Weather'
import styles from '../../../styles/Home/Home.module.css'
import Image from "next/image";
import currentIcon  from './icon'


export default function Climate() {

    const {currentWeather} = useContext(WeatherContext)
    const condition = currentWeather?.condition;


    return(

        <div className={styles.climate}>
            <h3 className={styles.city}>{currentWeather?.city}</h3>
             <h4 className={styles.country}>{currentWeather?.country}</h4>
             <p className={styles.text}> <Image src={currentIcon(condition)} width="20rem" height="20rem" alt="climate-icon" /> {" "}{currentWeather?.condition}</p>
             <h2 className={styles.celsius}> {currentWeather?.temperature}°c</h2>
             <p className={styles.text}>{currentWeather?.date}</p>
        </div>
    )
}