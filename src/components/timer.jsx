import React, { useState, useEffect } from "react";

const Timer = () => {
    const [isPause, setIsPause] = useState(false)
    const [count, setCount] = useState(10)


    useEffect(() => {
        let countDown;
        if (count > 0 && !isPause) {
            countDown = setInterval(() => {
                setCount(count - 1)
            }, 1000)
        }

        return () => clearInterval(countDown)
    }, [count, isPause])

    return (
        <>
            {count}
            <button onClick={() => setIsPause(!isPause)}>{isPause ? "Resume" : "Pause"}</button>

            <iframe src="https://devbud.wlliu.com/" frameborder="0" height={800} width={1200}></iframe>
        </>
    )
}

export default Timer;