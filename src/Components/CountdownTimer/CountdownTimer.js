import React from "react";
import { useState,useEffect } from "react";
import "./CountdownTimer.css" ;
import { getRemainingTimeUntilMsTimestamp } from "./Utils/CountdownTimerUtils"; 
const defaultRemainingTime = {
    minutes : '25',
    seconds : '00',
}
const CountdownTimer = ({countdownTimestampMs}) => {
    const [remainingTime, setRemainingTime]= useState(defaultRemainingTime);

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            updateRemainingTime(countdownTimestampMs);
        },1000);
        return ()=> clearInterval(intervalId);
    },[countdownTimestampMs])
    function updateRemainingTime(countdown){
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }
    return(
        <div className="countdown-timer">
        <span>{remainingTime.minutes}</span>
        <span>m</span>
        <span>{remainingTime.seconds}</span>
        <span>s</span>
        

        </div>
    );
}

export default CountdownTimer;