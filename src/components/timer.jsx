import React, { useEffect, useState, Fragment } from 'react';

const Timer = () => {
    const [toggle, setToggle] = useState(false)
    const [timer, setTimer] = useState(0)
    const [min, setMin] = useState(false)
    const [sec, setSec] = useState(false)


    useEffect(() => {
        let counter;
        if (toggle) {
            counter = setInterval(() => {
                setTimer(timer => timer - 1)
            }, 1000)
        }
        return () => {
            clearInterval(counter)
        }
    }, [toggle])

    useEffect(() => {
        if (timer <= 0) setToggle(false)
    }, [timer])

    const handleStart = () => {
        setToggle(true);
        setTimer(Number(min * 60) + Number(sec))
        // setCounter(setInterval(() => setTimer(timer => timer - 1), 1000));
    };
    const handlePR = () => {
        // if(toggle) {
        //   clearInterval(counter)
        // } else {
        //   setCounter(setInterval(() => setTimer(timer => timer - 1), 1000));
        // }
        setToggle(toggle => !toggle);
    }
    const handleReset = () => {
        setMin(0);
        setSec(0);
        setTimer(0);
        setToggle(false);
        // if(counter) clearInterval(counter);
    }
    const showMin = Math.floor(timer / 60);
    const showSec = timer % 60

    return (
        <Fragment>
            <label>
                <input
                    value={min}
                    onChange={(e) => { setMin(e.target.value) }}
                    type="number"
                />
                Minutes
            </label>
            <label>
                <input
                    value={sec}
                    onChange={(e) => { setSec(e.target.value) }}
                    type="number"
                />
                Seconds
            </label>

            <button onClick={handleStart}>START</button>
            <button onClick={handlePR}>PAUSE / RESUME</button>
            <button onClick={handleReset}>RESET</button>

            <h1 data-testid="running-clock">
                {
                    showMin < 10 ? "0" + showMin : showMin
                }:{
                    showSec < 10 ? "0" + showSec : showSec
                }
            </h1>
        </Fragment>
    );
}

export default Timer;