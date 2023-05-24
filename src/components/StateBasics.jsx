import { Button, Typography } from '@mui/material';
import React, { useState } from 'react'

const StateBasics=() => {
    var [hname,setHname]= useState("");
    const changeHname=()=>{
        setHname("Home Page")
    }
    const changeGname=()=>{
        setHname("Gallery Page")
    }
    const changeCname=()=>{
        setHname("Gallery Page") 
    }
  return (
    <div style ={{paddingTop:"1080px"}}>

         <Typography variant ='h4'>hello{hname}</Typography>
         <Button variant ='contained' color='primary' onClick={changeHname}>Home</Button>&nbsp;
         <Button variant ='contained' color='secondary' onClick={changeGname}>fff</Button>&nbsp;
         <Button variant ='contained' color='success' onClick={changeCname}>jjj</Button>&nbsp;
        
         </div>
  )
}


export default StateBasics