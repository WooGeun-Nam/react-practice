import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const [ticks, setTicks] = useState(0);
    // 10초 단위로 Unmount(없어지게)

    useEffect(()=>{
        setInterval(function(){
            
        }, 1000);
    },[]);



    return (
        <div>
            <span>{ticks}</span>
            {
                ticks % 10 === 0 ?
                null :
                <Clock
                message={'ex05: useEffect Hook example'}
                hours={'10'}
                        minutes={'20'}
                        seconds={'03'}/>
            }
        </div>
    );
}