import React, { useRef, useState } from 'react'
import { FaFaceGrin, FaLightbulb, FaMoon } from 'react-icons/fa6'

const DarkMode = () => {
  const [Moon,setSun]=useState(true)
  const Dark=useRef(document.body)
  if (!Moon) {
    Dark.current.classList.add('Light')
  }
else{
  Dark.current.classList.remove('Light')
}
 
  const MakeSun=()=>{
    setSun(!Moon)
   
  }
  return (
    <>
    <article className='dark_mode' onClick={MakeSun}>
      {
      (Moon)?<FaMoon className={`mode_moon`}/>:<FaFaceGrin className={`mode_sun`} />
      }
   
   
    </article>
    </>
  )
}

export default DarkMode