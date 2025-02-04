import React, { useEffect } from 'react'
import img1 from '../assets/project1.png'
import img2 from '../assets/project2.png'
import img3 from '../assets/grd.png'
import img4 from '../assets/project4.png'
import img5 from '../assets/amet.png'
import img6 from '../assets/project5.png'
import img7 from '../assets/project6.png'
import img8 from '../assets/palepu.png'
import AOS from 'aos'

const Projects = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-quart',
      delay: 0,
      duration: 750
    })
  }, [1000])
  return (
    <div id="Projects" className='p-20 flex flex-col items-center justify-center portfolio'>
      <h1 data-aos="fade-right" className='text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500'>Projects</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20'>
        <a href='https://www.ametcitycollege.com/' target='blank'>
          <div data-aos="fade-up" className='change border-2 border-fuchsia-800 b_glow'>
            <img height={250} width={250} className='text-[26px] flex items-center justify-center  rounded-t-3xl p-1' src={img5} alt='' />
            <div className='heading'>
              <p className='flex items-center justify-center font-bold text-[20px] h-content text-center'>AMET City College</p>
              <p className='flex items-center justify-center p-content'>Javascript & PHP</p>
            </div>
          </div>
        </a>
        <a href='https://www.manjusmakeoverartistry.in/' target='blank'>
          <div data-aos="fade-down" className='change border-2 border-fuchsia-800 b_glow'>
            <img height={250} width={250} className='text-[26px] flex items-center justify-center  rounded-t-3xl p-1' src={img7} alt='' />
            <div className='heading'>
              <p className='flex items-center justify-center font-bold text-[20px] h-content text-center'>Manjus Makeover Artistry</p>
              <p className='flex items-center justify-center p-content'>React & Node js</p>
            </div>
          </div>
        </a>
        <a href='https://www.goldenroycedesign.com/' target='blank'>
          <div data-aos="fade-up" className='change border-2 border-fuchsia-800 b_glow'>
            <img height={250} width={250} className='text-[26px] flex items-center justify-center  rounded-t-3xl p-1 ' src={img3} alt='' />
            <div className='heading'>
              <p className='flex items-center justify-center font-bold text-[20px] h-content text-center'>Golden Royce Design</p>
              <p className='flex items-center justify-center p-content'>React & Node js</p>
            </div>
          </div>
        </a>
        <a href='https://palepu.vercel.app/' target='blank'>
          <div data-aos="fade-down" className='change border-2 border-fuchsia-800 b_glow'>
            <img height={250} width={250} className='text-[26px] flex items-center justify-center  rounded-t-3xl p-1 ' src={img8} alt='' />
            <div className='heading'>
              <p className='flex items-center justify-center font-bold text-[20px] h-content text-center'>Palepu Pharma</p>
              <p className='flex items-center justify-center p-content'>React & Node js</p>
            </div>
          </div>
        </a>
        <a href='https://dfloristapp.netlify.app/' target='blank'>
          <div data-aos="fade-up" className='change border-2 border-fuchsia-800 b_glow'>
            <img height={250} width={250} className='text-[26px] flex items-center justify-center  rounded-t-3xl p-1' src={img1} alt='' />
            <div className='heading'>
              <p className='flex items-center justify-center font-bold text-[20px] h-content text-center'>E-Commerce Website</p>
              <p className='flex items-center justify-center p-content'>React</p>
            </div>
          </div>
        </a>
        <a href='https://irita.netlify.app' target='blank'>
          <div data-aos="fade-down" className='change border-2 border-fuchsia-800 b_glow'>
            <img height={250} width={250} className='text-[26px] flex items-center justify-center  rounded-t-3xl p-1 ' src={img4} alt='' />
            <div className='heading'>
              <p className='flex items-center justify-center font-bold text-[20px] h-content text-center'>Irita</p>
              <p className='flex items-center justify-center p-content'>React / Bootstrap</p>
            </div>
          </div>
        </a>
        <a href='https://ckconsultants.vercel.app/' target='blank'>
          <div data-aos="fade-up" className='change border-2 border-fuchsia-800 b_glow'>
            <img height={250} width={250} className='text-[26px] flex items-center justify-center  rounded-t-3xl p-1 ' src={img6} alt='' />
            <div className='heading'>
              <p className='flex items-center justify-center font-bold text-[20px] h-content text-center'>Ck consultants</p>
              <p className='flex items-center justify-center p-content'>React & Node js</p>
            </div>
          </div>
        </a>
        <a href='https://cheery-pothos-dc837f.netlify.app/' target='blank'>
          <div data-aos="fade-down" className='change border-2 border-fuchsia-800 b_glow'>
            <img height={250} width={250} className='text-[26px] flex items-center justify-center  rounded-t-3xl p-1 ' src={img2} alt='' />
            <div className='heading'>
              <p className='flex items-center justify-center font-bold text-[20px] h-content text-center'>Pokemon API</p>
              <p className='flex items-center justify-center p-content'>Javascript</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Projects