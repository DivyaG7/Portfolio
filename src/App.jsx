import About from "./Components/About";
import Banner from "./Components/Banner";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Nav from "./Components/Nav";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";


function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

  return (
    <>
      {
        loading ?
          <div className="bg-slate-900 h-[100vh] flex justify-center items-center">
            <BallTriangle
              height={100}
              width={100}
              radius={5}
              color="#d946ef"
              ariaLabel="ball-triangle-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
          :

          <div className="bg-slate-900">
            <Nav />
            <Banner />
            <About />
            <Services />
            <Projects />
            <Contact />
            <Footer />
          </div>
      }
    </>
  )
}

export default App
