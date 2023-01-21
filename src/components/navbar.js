import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import  Icon from '../img/icon.png';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { blue, yellow } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "../App.css"

function ResponsiveAppBar() {
 

 
  
  return (
    <AppBar  position="sticky" style={{ background: '#000000' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
       
          <img  src={Icon} height="35px" width="35px" alt="Kula AI"/>
          
       
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
   
        sx={{mx:2}}
      ><button class="menu">Products</button>
      <button class="menu">Our Story</button>
      <button class="menu" >Resources</button>
       {/* <Button  color="white">Products</Button>
       <Button>Our Story</Button>
       <Button>Resources</Button> */}
      </Stack>

          </Box>

          <Box  sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}><button class="button-63" role="button">Book a demo </button>         </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
