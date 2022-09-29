import React from 'react'
import './Intro.css'
import b1 from './Vector1.png';
import b2 from './Vector2.png';
import me from './me.png';
import Floating from '../Floating/Floating';
import crown from './crown.png'
import glasses from './glasses.png'
import {motion} from 'framer-motion'
import test from './test.png';



const Intro = () => {
  const transition ={duration :0.5,type:'spring'}
  return (
    <div className='Intro'>
        <div className='i-left'>
            <p className='i-kaun'>Hi ! it's</p>
            <p className='i-me'><span>D</span><span>e</span><span>e</span><span>p</span> <span>S</span><span>a</span><span>l</span><span>u</span><span>n</span><span>k</span><span>h</span><span>e</span></p>
            <p className='i-info'> Tech enthusiast , a curious brain ,always eager to learn ,interested in full stack<br/> Web development , cloud
                                    management and competitive programing </p>
            <button className="button">Upcoming...</button>
        </div>
        {/* <div className='trial'>
        <img src={test} alt="b2" height={200}/>

        </div> */}
        <div className='i-right'>
          <div className='ima1'>
            <img src={b1}  className="im1" alt="b1" height={220} />
            </div>
          <div className='ima2'>
            <img src={b2} className="im2" alt="b2" height={220}/>
            </div>
          <div className="me">
            <img src={me} className="im3"  alt="me"height={220} />
          </div>
        </div>
       
         {/*
        <motion.div
         initial={{ left: "65rem", top: "10rem" }}
         whileHover={{ left: "60rem" }}
         transition={transition}
         className='floating'>
          <Floating  image={crown} text1='web' text2='Developer'/>
        </motion.div>
        <motion.div
        initial={{ left: "40rem", top: "25rem" }}
        whileHover={{ left: "42rem" }}
        transition={transition}
         className='floating-2'>
        <Floating image={glasses} text1='Competative ' text2='Programer' />
        </motion.div>
        <div className='floating-3'>
        <Floating/>
        </div> */}

        
    </div>
  )
}


export default Intro