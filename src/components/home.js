import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import "../home.css"
import { useState, useEffect } from 'react'
import video from '../videos/1.mp4'
function Home() {

  const [Users, fetchUsers] = useState([])
 
  const getData = () => {
    fetch('https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        fetchUsers(res)
      })
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <div class="main">
    <div class="header">
    <Typography>fefwf</Typography>
    </div>
    <div class="flexbox">
   
      <div class="left-panel">
      <Box sx={{m:18,mt:20,mb:50}}>
        <h1 > {
       Users.texts &&Users.texts .map((item)=><ul><h1 class="title">{item.heading}</h1>
       <h1 class="head">{item.subHeading}</h1><p class="para">{item.description}</p></ul>)
     }</h1>
       
        </Box>
       
      </div>
      <div class="right-panel">
     
     <Box sx={{mt:10}}>
          <video
   muted
   autoPlay 
   loop >
<source src={video} type="video/mp4"></source>   
</video>
</Box>

   
      </div>
    </div>
   
    </div>
  );
}
export default Home;
