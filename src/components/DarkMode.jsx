import React from 'react'
import { FaFaceGrin, FaLightbulb, FaMoon } from 'react-icons/fa6'

const DarkMode = () => {
  return (
    <>
    <article className='dark_mode'>
   <FaMoon className='mode_moon'/>
   <FaFaceGrin className='mode_sun' />
    </article>
    </>
  )
}

export default DarkMode