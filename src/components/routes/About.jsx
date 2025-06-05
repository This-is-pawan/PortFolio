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
  SiMongodb,
  SiMongoose
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
            <div className="skill_icons "title="">
              <SiHtml5 className="skills_icon "title="html5" />
              <SiJavascript className="skills_icon " title="javascript"/>
              <SiCss3 className="skills_icon "title="css3" />
              <SiTailwindcss className="skills_icon "title="tailwindcss" />
              <SiBootstrap className="skills_icon "title="bootstrap" />
              <SiReact className="skills_icon "title="reactjs" />
              <SiTypescript className="skills_icon "title="typscript" />
              <SiNextdotjs className="skills_icon " title="nextjs"/>
              <SiNodedotjs className="skills_icon"title="nodejs" />
              <SiMongoose className="skills_icon"title="mongoose" />
              <SiExpress className="skills_icon" title="express"/>
              <SiPostman className="skills_icon" title='postman' />
            </div>
          </div>



    </>
  );
};

export default About;
