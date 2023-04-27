import React from 'react';
import Control from "../Control/Control"
import Time from "../Time/Time"
import { useState } from 'react';
function Stop() {
    // isActive tell if the stop watch is in active state
    const [isActive, setIsActive] = useState(false);
    // isPaused tell if the stop watch is in active state and is paused or not
    const [isPaused, setIsPaused] = useState(true);
    // time store the time elapsed since pressed start
    const [time, setTime] = useState(0);

    React.useEffect(() => {
        let interval = null;

        if (isActive && isPaused === false) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } 
        else {
            clearInterval(interval);
        }
        return ()=> {
            clearInterval(interval);
        };
    }, [isActive, isPaused]);

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    };
    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    };

    return (
        <div className="stop-watch">
            <Time time={time} />
            <Control
             active = {isActive}
             isPaused = {isPaused}
             handleStart = {handleStart}
             handlePauseResume = {handlePauseResume}
             handleReset = {handleReset}
            />
        </div>
    );
}
export default Stop;