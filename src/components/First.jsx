import React from 'react'

import { TextField, Typography ,Button} from '@mui/material';
const First = () => {
  return (
    <div> <h1>SHAUN JO AGI</h1>
    <input placeholder='Name'/>
    <br/>
    <input type='password' placeholder='password'/>
    <br/>
    <buttton>submit</buttton>
    <br/>
   <Typography variant ='h1'>SHAUN JO AGI </Typography>
   <TextField variant='outlined' label='house name '/>
   <br/>
   <TextField variant='standard' label='house name '/>
    <br/>
    <TextField variant='filled' label='house name '/>
    <br/>
    <br/>
    <Button variant='contained'>submit</Button>
    </div>

  )
}

export default First

