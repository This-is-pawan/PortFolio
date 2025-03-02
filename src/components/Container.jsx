// import React, { useEffect, useRef,useState } from "react";
import { useState } from "react";
import img from "./routes/routerImg/Home.svg";
import {
  SiBootstrap,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const Container = () => {
const [cont,setCont]=useState(false)
 

  return (
    <>
      <div className="container_positions" >
        <div className="container_positions_align" >
          <div className={`container ${cont?'container_color':'container_blue'} `}  >
            <div className="container_child" >
              <div className="stack_img_align" >
                <img src={img} alt="profile_picture" className="stack_img" />
              </div>
              <h3>I'm a full stack developer</h3>
              <a href="https://github.com/This-is-pawan" target="_blank" style={{color:'yellow',borderBottom:'3px'}}>See More</a>
            </div>
          </div>
          <div className={`Skill ${cont?'container_color':'container_blue'}`} >
            <h3>Skills</h3>
            <div className="skill_icons">
              <SiHtml5 className="skills_icon" />
              <SiJavascript className="skills_icon" />
              <SiCss3 className="skills_icon" />
              <SiTailwindcss className="skills_icon" />
              <SiBootstrap className="skills_icon" />
              <SiReact className="skills_icon" />
              <SiTypescript className="skills_icon" />
              <SiNextdotjs className="skills_icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
