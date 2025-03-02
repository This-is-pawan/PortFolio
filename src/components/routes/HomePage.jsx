import img from './routerImg/Home.svg'
import { useState } from "react";
const HomePage = () => {
  const [cont, setCont] = useState(false);
  return (
    <>
       <div className={`container ${cont ? "container_color" : "container_blue" } `} >
            <div className="container_child">
              <div className="stack_img_align">
                <img src={img} alt="profile_picture" className="stack_img" />
              </div>
              <article className="developer_text">

              <h3>I'm a full stack developer</h3>
              <a
                href="https://github.com/This-is-pawan"
                target="_blank"
                style={{ color: "yellow", borderBottom: "3px" }}
                >
                See More
              </a>
                </article>
            </div>
          </div>
    </>
  )
}

export default HomePage