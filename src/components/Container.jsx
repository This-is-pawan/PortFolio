import React from 'react'
import img from './routes/routerImg/Home.svg'
import { SiBootstrap, SiCss3, SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'
const Container = () => {
  return (
    <>
    <div className="container_positions">
    <div className="container_positions_align">
    <div className='container'>
      <div className="container_child">
        <div className="stack_img_align">
        <img src={img} alt="profile_picture"  className='stack_img'/>
        </div>
        <h3>i'm full stack developer</h3>
          
      </div>
      </div>
      <div className="Skill">
        <h3>Skills</h3>
        <div className="skill_icons">
        <SiHtml5  className='skills_icon'/>
        <SiJavascript  className='skills_icon'/>
        <SiCss3  className='skills_icon'/>
        <SiTailwindcss s className='skills_icon'/>
        <SiBootstrap s className='skills_icon'/>
        <SiReact s className='skills_icon'/>
        <SiTypescript  className='skills_icon'/>
        <SiNextdotjs  className='skills_icon'/>

        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Container