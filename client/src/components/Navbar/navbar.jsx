import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


import { Link } from 'react-router-dom';

import "./navbar.css"

const navbar = () => {
  return (
   <>
   <Box sx={{ flexGrow: 1 }}  >
      <AppBar position="fixed">
        <Toolbar className='appbar'>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img className='img1' src="https://preview.colorlib.com/theme/bizpro/images/logo/logo.png" alt="" />
          </Typography>
          <div>
       <Link className='link'  to="" style={{color:"red"}}>Home</Link>
       <Link className='link' to="/about">About</Link>
       <Link className='link' to="/services">Services</Link>
       <Link className='link' to="/portfolio">Portfolio</Link>
       <Link className='link' to="/team">Team</Link>
       <Link className='link' to="/skill">Skill</Link>
       <Link className='link' to="/clients">Clients</Link>
       <Link className='link' to="/pricing">Pricing</Link>
       <Link className='link' to="/blog">Blog</Link>
       <Link className='link' to="/contact">Contact</Link>
       </div>
        </Toolbar>
      </AppBar>
    </Box>
   
   </>
  )
}

export default navbar
