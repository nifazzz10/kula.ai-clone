import * as React from "react";
import "../home.css";
import { useState, useEffect } from "react";
import video from "../videos/1.mp4";
import video1 from "../videos/2.mp4";
import AOS from "aos";
import "aos/dist/aos.css";
import $ from "jquery";
function Home() {
  $(document).ready(function () {
    $(window).scroll(function (event) {
      let scroll = $(this).scrollTop();
      let opacity = 1 - scroll / 1000;
      if (opacity > 0) {
        $(".vid1").css("opacity", opacity);
      }
    });
  });

  const [Users, fetchUsers] = useState([]);

  const getData = () => {
    fetch("https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        fetchUsers(res);
      });
  };
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div class="main">
      <div class="flexbox">
        <div class="left-panel">
          <div class="textpanel ">
            <h1>
              {Users.texts &&
                Users.texts.map((item) => (
                  <ul data-aos="fade-right">
                    <h1 class="title">{item.heading}</h1>
                    <h1 class="head">{item.subHeading}</h1>
                    <p class="para">{item.description}</p>
                  </ul>
                ))}
            </h1>
          </div>
        </div>
        <div class="right-panel">
          <div class="dummy"></div>

          <div class="videopanel" data-aos="fade-left">
            <video muted autoPlay loop class="vid2">
              <source src={video1} type="video/mp4"></source>
            </video>
            <video muted autoPlay loop class="vid1">
              <source src={video} type="video/mp4"></source>
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
