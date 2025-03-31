import { useState, useEffect } from "react";
import './util.css'
function Clock(){
    var [date, setDate] = useState(new Date());
    useEffect(()=>{
        var timer= setInterval(() => setDate(new Date()), 1000)
        return function cleanup(){
            clearInterval(timer);
        }
    });
    let currentDate = (date.getMonth() + 1).toString() + "/"+ date.getDate().toString() + "/"+ date.getFullYear().toString();
    return(
        <>
            <p className="clock">{currentDate}</p>
            <p className="clock">{date.toLocaleTimeString()}</p>
        </>
    );
}

export default Clock;