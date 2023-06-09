import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{paddingTop:'80px'}}>
        <AppBar>
            <Toolbar>
                <Typography sx={{ flexGrow: 1 }} > NewApp  </Typography>
                <Button variant ='text' >
                  <Link to={'/'}style={{textDecoration:'none',color:'white'}}>Home</Link>
                </Button>
                <Button variant ='text'>
                  <Link to={'/first'}style={{textDecoration:'none',color:'white'}}>First</Link>
                </Button>
                <Button variant ='text'>
                  <Link to={'/table'}style={{textDecoration:'none',color:'white'}}>Table</Link>
                </Button>
                <Button variant ='text'>
                  <Link to={'/axios'}style={{textDecoration:'none',color:'white'}}>ApiGet</Link>
                </Button>

            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar