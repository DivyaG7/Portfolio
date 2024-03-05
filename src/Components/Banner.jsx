import {AiFillGithub} from 'react-icons/ai'
import { FaLinkedinIn, FaInstagram} from 'react-icons/fa'
import img1 from '../assets/Divi.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


const Banner = () => {
    useEffect(() => {
        AOS.init({
            easing: 'ease-out-quart',
            delay: 0,
            duration: 750
        })
    },[1000])
  return (
    <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
        <div className="h-full lg:py-40 flex flex-col justify-center mb-8 lg:items-start items-center text-white"> 
            <h1 data-aos="fade-right" className="text-[52px] font-semibold leading-normal">Hi, I'm Divya</h1>
            <h2 data-aos="fade-right" className='mb-8'><span className='text-[32px] font-semibold text-fuchsia-500'>Frontend Developer</span></h2>
            <p data-aos="fade-left" >I'm a passionate Frontend Developer with a strong background in crafting engaging and user-centric web experiences. With a keen eye for design and a knack for problem-solving, I strive to create intuitive and visually stunning interfaces that leave a lasting impression. From concept to implementation, I am dedicated to delivering high-quality solutions that meet both user needs and business objectives.</p>
            <div className="flex mt-8 gap-2">
                <div className="flex items-center justify-center">
                    <div className="flex space-x-2">
                        <a href="" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                            <AiFillGithub className="text-[28px]" />
                        </a>
                        <a href="" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                            <FaLinkedinIn className="text-[28px]" />
                        </a>
                        <a href="" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                            <FaInstagram className="text-[28px]" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <img data-aos="fade-up" src={img1} width={290} height={290} className='rounded-full border-1 p-1 border-fuchsia-500 img_glow' alt='' />
    </div>
  )
}

export default Banner