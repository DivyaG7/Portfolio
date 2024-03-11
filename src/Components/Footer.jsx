import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"


const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white lg:px-48 px-4 py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        
        <div>
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Servies</h2>
          <ul className="text-[16px] my-4">
            <li className="my-2">Web Developement</li>
            <li className="my-2">Web Design</li>
            <li className="my-2">SEO</li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Contact</h2>
          <p className="text-[16px] my-4">Email: divyaneela75@gmail.com</p>
          <p className="text-[16px] my-4">Phone: +91 8903558873</p>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Follow Me</h2>
          <div className="flex space-x-4">
            <a className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" href="https://github.com/DivyaG7">
              <FaGithub />
            </a>
            <a className="text-white hover:text-fuchsia-800 transition-all duration-150" href="https://www.linkedin.com/in/divya-g-88608a223">
              <FaLinkedin />
            </a>
            <a className="text-white hover:text-fuchsia-800 transition-all duration-150" href="https://www.instagram.com/divyag5562/">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer