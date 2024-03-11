import React from 'react'
import img1 from '../assets/project1.png'
import img2 from '../assets/project2.png'
import img3 from '../assets/project3.png'
import img4 from '../assets/project4.png'

const Projects = () => {
  return (
    <div id="Projects" className='p-20 flex flex-col items-center justify-center '>
      <h1 data-aos="fade-right" className='text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500'>Projects</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20'>
        <a href='https://dfloristapp.netlify.app/'>
          <div data-aos="fade-up"  className='change border-2 border-fuchsia-800 b_glow'>
            <img height={250} width={250} className='text-[26px] flex items-center justify-center  rounded-3xl p-1' src={img1} alt='' />
            <div className='heading'>
              <p className='flex items-center justify-center font-bold text-[20px] h-content'>E-Commerce Website</p>
              <p className='flex items-center justify-center p-content'>React</p>
            </div>
          </div>
        </a>
        <a href='https://cheery-pothos-dc837f.netlify.app/'>
          <div data-aos="fade-down" className='change border-2 border-fuchsia-800 b_glow'>
            <img height={250} width={250} className='text-[26px] flex items-center justify-center  rounded-3xl p-1 ' src={img2} alt='' />
            <div className='heading'>
              <p className='flex items-center justify-center font-bold text-[20px] h-content'>Pokemon API</p>
              <p className='flex items-center justify-center p-content'>Javascript</p>
            </div>
          </div>
        </a>
        <a href='https://test1114.odoo.com/'>
          <div data-aos="fade-up" className='change border-2 border-fuchsia-800 b_glow'>
            <img  height={250} width={250} className='text-[26px] flex items-center justify-center  rounded-3xl p-1 ' src={img3} alt='' />
            <div className='heading'>
              <p className='flex items-center justify-center font-bold text-[20px] h-content'>Flowershop</p>
              <p className='flex items-center justify-center p-content'>Javascript & Python</p>
            </div>
          </div>
        </a>
        <a href='https://irita.netlify.app'>
          <div data-aos="fade-down" className='change border-2 border-fuchsia-800 b_glow'>
            <img  height={250} width={250} className='text-[26px] flex items-center justify-center  rounded-3xl p-1 ' src={img4} alt='' />
            <div className='heading'>
              <p className='flex items-center justify-center font-bold text-[20px] h-content'>Irita</p>
              <p className='flex items-center justify-center p-content'>React / Bootstrap</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Projects