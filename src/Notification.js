import { useEffect, useState } from "react";
import React from "react";
import Images from "./Images"
import facebook  from "./images/facebook.png"
import github from "./images/github.png"
const getDateNow = () =>{
  const now = new Date()
  return {
    hours: now.getHours(),
    minutes : now.getMinutes(),
    day: now.getDay(),
    date : now.getDate(),
    month: now.getMonth(),
    year: now.getFullYear(),
  }
}
const styleImage = {
width:'95px',height:'95px',
borderRadius: '41%',
padding : '15px'
}
function Notification() {
  // Initialize State
  const [time,setTime]= useState(getDateNow())
  // Initialize useEffect
  useEffect( ()=>{
    setInterval(()=>{
      setTime(getDateNow())
    },1300 )
  },[])
  return (
   <div className="notification">
    <div className="time">{`${time.hours}:${ (time.minutes>=10) ? time.minutes : '0' +time.minutes}`}</div>
    <div className="date">{`Ngày ${time.date} Tháng ${time.month} Năm ${time.year}`}</div>
    <div className="info">
      <h3> Mvt</h3>
     <Images styles ={ styleImage} 
     source={facebook} url ={"https://www.facebook.com/sieuphammaitien594/"}
     />
     <Images styles ={ styleImage}
      source={github} url ={"https://github.com/mvtvn78"}/>
    </div>
   </div>
  )
}
export default Notification