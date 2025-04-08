import img from "./routerImg/Resume.svg"
import { useState } from "react";
import {
  SiBootstrap,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
   SiNodedotjs, 
  SiExpress,
  SiPostman ,
  SiMongodb, SiMongoose
} from "react-icons/si";
import {  IoDocumentTextOutline } from "react-icons/io5";
const About = () => {
  const [cont] = useState(false);
  return (
    <>
      
      <div className="container_positions">
        <div className="container_positions_align">
      <div className={`resume ${cont ? "container_color" : "container_blue"}`}>
        <IoDocumentTextOutline className="resume_doc" />
        {/* <h2>resume</h2> */}
        <img src={img} alt="resume" className="img_resume"/>
      </div>
      {/*  */}

       
        </div>
      </div>

{/*  */}
      <div className={`Skill ${cont?'container_color':'container_blue'}`} >
            <h3>Skills</h3>
            <div className="skill_icons ">
              <SiHtml5 className="skills_icon " />
              <SiJavascript className="skills_icon " />
              <SiCss3 className="skills_icon " />
              <SiTailwindcss className="skills_icon " />
              <SiBootstrap className="skills_icon " />
              <SiReact className="skills_icon " />
              <SiTypescript className="skills_icon " />
              <SiNextdotjs className="skills_icon " />
              <SiNodedotjs className="skills_icon" />
              <SiMongoose className="skills_icon" />
              <SiExpress className="skills_icon" />
              <SiPostman className="skills_icon" />
            </div>
          </div>



    </>
  );
};

export default About;
