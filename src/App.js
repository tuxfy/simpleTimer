import React, {useState} from 'react';
import './App.scss';
import Button from './components/Button/Button';
import Clock from './components/Clock/Clock';
import { newUUID } from './utils/UUID';

const App = () => {
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);

    const addTime = (minutes) => {
        setMin((min + minutes >= 60 ? 0 : min + minutes ));        
    };
    const timerAction = (minutes) => {
        console.log("minutes",minutes);
        setMin(0);  
        setSec(0);  
    };


    return (
        <>
            <header>
                {[1, 5, 10].map((value) => {
                    return (
                        <Button
                            key={newUUID()}
                            title={'➕' + value + 'min'}
                            value={value}
                            size="big"
                            clickEvent={addTime}
                        ></Button>
                    );
                })}
                {['▶️', '⏹️', '🗑️'].map((value) => {
                    return (
                        <Button
                            key={newUUID()}
                            title={value}
                            value={value}
                            size="big"
                            clickEvent={timerAction}
                        ></Button>
                    );
                })}
            </header>
            <main>
                <Clock
                    min={min}
                    sec={sec}>
                </Clock>
            </main>
            <footer>
                <p>Copyright 2009 Your name</p>
            </footer>
        </>
    );
};

export default App;
