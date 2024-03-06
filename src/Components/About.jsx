
import img2 from '../assets/Divya.png'

const About = () => {

  const downloadResume = () => {
    const resumeUrl = '../assets/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (

    <div id="About" className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
      <img data-aos="fade-down" src={img2} width={290} height={290} className='rounded border-2 p-1 border-fuchsia-500 img_glow' alt='' />
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal text-fuchsia-500 uppercase">About me</h1>
        <p data-aos="fade-left">I am driven by my love for coding and my enthusiasm for staying at the forefront of web development trends. With a focus on continuous learning, I am always eager to expand my skill set and explore new technologies. My goal is to contribute to projects that make a meaningful impact and push the boundaries of what is possible in the digital realm.

</p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <button className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden" onClick={downloadResume}>Resume</button>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default About