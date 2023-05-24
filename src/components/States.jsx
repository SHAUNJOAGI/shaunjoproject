import { Button,Typography,TextField } from '@mui/material'
import React from 'react'

const States = () => {
    var [pname,setPname]=useState("")
    var[val,setVal]=useState()

    const inputHandler=(e) =>{
        setVal(e.target.value);
        console.log(val)
    }
    const changeName=()=>{
        setPname(val)
        setVal("")
    }
return (
    <div>
          <Typography variant='h4'>hello {pname}</Typography>
          <TextField variant='outlined' value={val}label='Name'onChange={inputHandler}/> <br/><br/>
          <Button variance='contained' onclick={changename}>Change</Button>
          </div>
  )
}

export default States