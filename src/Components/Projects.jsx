import React from 'react'
import img1 from '../assets/project1.png'
import img2 from '../assets/project2.png'
import img3 from '../assets/project3.png'
import img4 from '../assets/project4.png'
import '../Components/Projects.css'

const Projects = () => {
  return (
    <div id="Projects" className='p-20 flex flex-col items-center justify-center '>
      <h1 data-aos="fade-right" className='text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500'>Projects</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20'>
        <a href='https://dfloristapp.netlify.app/' className="relative"><img data-aos="fade-up" height={250} width={250} className='text-[26px] flex items-center justify-center  rounded-3xl p-1 border-2 border-fuchsia-800 b_glow' src={img1} alt='' />
          <div className="overlay">
            <span className="overlay-text">React</span>
          </div>
        </a>
        <a href='https://cheery-pothos-dc837f.netlify.app/' className="relative"><img data-aos="fade-down" height={250} width={250} className='text-[26px] flex items-center justify-center  rounded-3xl p-1 border-2 border-fuchsia-800 b_glow' src={img2} alt='' />
        <div className="overlay">
            <span className="overlay-text">Javascript</span>
          </div></a>
        <a href='https://test1114.odoo.com/' className="relative"><img data-aos="fade-up" height={250} width={250} className='text-[26px] flex items-center justify-center  rounded-3xl p-1 border-2 border-fuchsia-800 b_glow' src={img3} alt='' />
        <div className="overlay">
            <span className="overlay-text">Javascript & Python</span>
          </div></a>
        <a href='https://irita.netlify.app' className="relative"><img data-aos="fade-down" height={240} width={240} className='text-[26px] flex items-center justify-center  rounded-3xl p-1 border-2 border-fuchsia-800 b_glow' src={img4} alt='' />
        <div className="overlay">
            <span className="overlay-text">React</span>
          </div></a>
      </div>
    </div>
  )
}

export default Projects