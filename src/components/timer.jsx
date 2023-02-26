import { useState, useEffect } from 'react';

const Timer = () => {
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(count => count + 1);
            
        }, 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);
    
    return (
        <div>
            Timer: {count}
            <button onClick={() => setToggle(!toggle)}>toggle timer</button>
        </div>
    );
}

export default Timer;

