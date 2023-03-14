import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const [ticks, setTicks] = useState(0);
    const [time, setTime] = useState(new Date());
    // 10초 단위로 Unmount(없어지게)

    useEffect(() => {
        var timeID = setInterval(() => {
            setTime(new Date());
        }, 1000)
        return (function(){
            clearInterval(timeID);
        });
    }, []);

    useEffect(() => {
        setTicks(ticks+1);
    }, [time]);

    return (
        <div>
            <span>{ticks}</span>
            {
                ticks % 10 === 0 ?
                null :
                <Clock
                message={'ex05: useEffect Hook example'}
                hours={time.getHours()}
                minutes={('0' + time.getMinutes()).slice(-2)}
                seconds={('0' + time.getSeconds()).slice(-2)}/>
            }
        </div>
    );
}