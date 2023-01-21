import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import "../home.css"
import video from '../videos/1.mp4'
function Home() {

  
  return (
    <div class="main">
    <div class="header">
    <Typography>fefwf</Typography>
    </div>
    <div class="flexbox">
   
      <div class="left-panel">
        <h1>fbdb</h1>
      </div>
      <div class="right-panel">
      {/* <video autoplay muted loop src={video}  width="750" height="500"  config={config}
      controls>
        
     </video> */}
     <Box sx={{mt:10,mb:3}}>
          <video
 
   muted
   autoPlay 
   loop >
<source src={video} type="video/mp4"></source>   
</video>
</Box>

   
      </div>
    </div>
    <div class="footer">
      
      </div>
    </div>
  );
}
export default Home;
