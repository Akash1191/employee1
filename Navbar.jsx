import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"red"}}>
        <Toolbar style={{background:"blueviolet"}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align='left' color='white'>
            APP
          </Typography>
          <Button color='inherit'><Link  to={"/employee"} style={{color:"white"}}>Forms</Link></Button>
          <Button color="inherit"><Link to={"/home"} style={{color:'white'}}>Home</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
