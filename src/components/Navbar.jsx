import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    
    <div>
        <AppBar>
            <Toolbar>
            <Typography>BLOG DASHBOARD</Typography> &nbsp; &nbsp;

            <Button variant='contained' color='error'>
            <Link to={'/Home'}style={{textDecoration:'none',color:'white'}}>Home</Link></Button>

            <Button variant ='contained' color='success'>
                <Link to={'/add'}style={{textDecoration:'none',color:'white'}}>Add blog</Link>
            
                </Button>

      

                </Toolbar>
                </AppBar>    </div>
  )
}
