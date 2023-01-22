import { Grid } from "@mui/material";
import { useLayoutEffect, useState } from "react";

import "../home.css";
function Apifetch() {
// const images = [0, 1, 2, 3, 4];


//   const [visibleImagesMap, setVisibleImagesMap] = useState(
//     images.reduce((map, image) => {
//       map[image] = false;
//       return map;
//     }, {})
//   );

//   useLayoutEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = document.documentElement.scrollTop;
//       const viewportHeight = window.innerHeight;

//       const newVisibleImagesMap = images.reduce((map, image) => {
//         map[image] = scrollTop >= image * viewportHeight;
//         return map;
//       }, {});

//       setVisibleImagesMap(newVisibleImagesMap);
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

  return (
<section >
    <div class="banner">
  
                   <center> <h2 class="head">Double The Hires Half, The<br /> Effort</h2></center>
                   <center> <p class="para2" >Open conversations and nurture relationships at scale and be the first choice when your ideal <br />candidate is ready to explore.</p><button class="button-62" type="button">View Kula Outreach</button></center>
           
        </div>
    
</section>

  );
};
export default Apifetch