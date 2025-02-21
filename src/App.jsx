import { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import About from "./Components/About";
import Banner from "./Components/Banner";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Nav from "./Components/Nav";
import Services from "./Components/Services";
import Footer from "./Components/Footer";

function App() {
  const [loading, setLoading] = useState(true); // Set loading to true by default
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.pageX, y: e.pageY });

      // Create a new trail circle
      const trail = document.createElement('div');
      trail.classList.add(
        'absolute',
        'rounded-full',
        'bg-fuchsia-800',
        'b_glow',
        'bg-opacity-50',
        'pointer-events-none',
        'transition-all',
        'duration-300'
      );

      // Set the position of the trail
      trail.style.left = `${e.pageX - 12.5}px`; // Center horizontally
      trail.style.top = `${e.pageY - 12.5}px`;  // Center vertically
      trail.style.width = '25px'; // Set initial width
      trail.style.height = '25px'; // Set initial height

      // Append trail to the body
      document.body.appendChild(trail);

      // Start the shrink and fade-out effect
      setTimeout(() => {
        trail.style.transform = 'scale(0.2)'; // Shrink the circle
        trail.style.opacity = '0'; // Fade out

        // Cleanup after animation ends
        setTimeout(() => {
          document.body.removeChild(trail);
        }, 300); // Wait for animation to complete before removing
      }, 0); // Execute immediately to start the animation
    };

    // Add mousemove event listener
    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {
        loading ? (
          <div className="bg-slate-900 h-screen flex justify-center items-center">
            <BallTriangle
              height={100}
              width={100}
              radius={5}
              color="#d946ef"
              ariaLabel="ball-triangle-loading"
              visible={true}
            />
          </div>
        ) : (
          <div className="bg-slate-900 relative">
            <Nav />
            <Banner />
            <About />
            <Services />
            <Projects />
            {/* <Contact /> */}
            <Footer />

            {/* Persistent circle that follows the mouse */}
            <div
              className="absolute rounded-full bg-fuchsia-800 b_glow bg-opacity-50 pointer-events-none"
              style={{
                left: `${mousePosition.x - 12.5}px`,
                top: `${mousePosition.y - 12.5}px`,
                width: '25px',
                height: '25px',
                transition: 'left 0.1s, top 0.1s', // Smooth movement
              }}
            ></div>
          </div>
        )
      }
    </>
  );
}

export default App;
