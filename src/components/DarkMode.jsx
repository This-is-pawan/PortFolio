import React, { useState } from 'react'
import { FaFaceGrin, FaLightbulb, FaMoon } from 'react-icons/fa6'

const DarkMode = () => {
  const [Moon,setSun]=useState(true)
  const MakeSun=()=>{
    setSun(!Moon)
  }
  return (
    <>
    <article className='dark_mode' onClick={MakeSun}>
      {(Moon)?<FaMoon className='mode_moon ' />:<FaFaceGrin className='mode_sun' />}
   

   
    </article>
    </>
  )
}

export default DarkMode