import React from "react";
import dayjs from 'dayjs';

export function getRemainingTimeUntilMsTimestamp(timestampMs){
    const nowDayJS = 0;
    const timestampDayJS = dayjs() ;
    
    return{
        minutes : getRemainingMinutes(nowDayJS,timestampDayJS),
        seconds : getRemainingSeconds(nowDayJS, timestampDayJS)
    }
}

function getRemainingSeconds(nowDayJS,timestampDayJS){
    const seconds = timestampDayJS.diff(nowDayJS,'seconds') % 60;
    return seconds;
}

function getRemainingMinutes(nowDayJS,timestampDayJS){
    const minutes = timestampDayJS.diff(nowDayJS,'minutes') %60;
    return minutes;
}