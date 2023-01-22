import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import "../home.css"
import  { useRef, useState, useEffect } from 'react';


import video from '../videos/1.mp4'

import video1 from '../videos/2.mp4'

import video2 from '../videos/3.mp4'
function Home() {

  const [description, setDescription] = useState(true);
  const [reviews, setReviews] = useState(false);
  const [vid2, setVid2] = useState(false);
  const descriptionHandler = () => {
    setDescription(true);
    setReviews(false);
    setVid2(false);
  };
  const reviewsHandler = () => {
    setDescription(false);
    setReviews(true);
    setVid2(false);
    };
      
    const vid2Handler = () => {
      setDescription(false);
      setReviews(false);
      setVid2(true);
    };
  
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
    
    <div class="flexbox">
   
      <div class="left-panel">
      <div class="textpanel">
        <h1 > {
       Users.texts &&Users.texts .map((item)=><ul><h1 class="title">{item.heading}</h1>
       <h1 class="head">{item.subHeading}</h1><p class="para">{item.description}</p></ul>)
     }</h1>
       
       </div>
      </div>
      <div class="right-panel">
     
    
     <div class="fake">
            <button onClick={descriptionHandler}>
                Descriptions</button>
            <button onClick={reviewsHandler}>
                Reviews</button>
                <button onClick={vid2Handler}>
                Reviews</button>
        </div>

   <div class="videopanel">
       {description && (       <video
   muted
   autoPlay 
   loop >
            <source src={video} type="video/mp4"></source> </video>  
            )}
            {reviews && (       <video
   muted
   autoPlay 
   loop >
              <source src={video1} type="video/mp4"></source>   </video>
            )}
   {vid2 && (       <video
   muted
   autoPlay 
   loop >
              <source src={video2} type="video/mp4"></source>   </video>
        
            )}



</div>
      </div>
    </div>
   
    </div>
  );
}
export default Home;
