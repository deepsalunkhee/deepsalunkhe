import React from 'react'
import p1 from '../Projects/enviro.png'

const Projects = () => {
  return (
    <div className='project'>
                <h3>Projects</h3>
        <div className="envd">
            
          
            {/* <iframe src="http://environmentaldamagecontrol.me/" title='Project' width={"100%"} height={"600px"} style={{border:"0.3rem solid orange",background:"white"} }  >Environmental-Damage-control</iframe> */}
            
            <a href='http://environmentaldamagecontrol.me/' target="blank"><img src={p1} alt="Project 1" width={"100%"} height={"600px"} style={{border:"0.3rem solid orange",background:"white"}}/></a>
        </div>
      
    </div>
  )
}

export default Projects
