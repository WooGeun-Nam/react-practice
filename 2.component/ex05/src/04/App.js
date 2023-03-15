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
            // 범위 문제
            // setTicks(ticks + 1); 는 불가능 -> 자신의 범위를 유지 closure의 특징
            // closure가 되면서 엉킨?다?
            // 이 함수들은 생성될 당시의 환경을 기억 합니다.
            setTicks((t) => t + 1);
        }, 1000)
        return (function(){
            clearInterval(timeID);
        });
    }, []);

    /* useEffect(() => {
        setTicks(ticks+1);
    }, [time]); */

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