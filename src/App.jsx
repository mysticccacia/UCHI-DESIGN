import React, { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import About from './components/About'
import Plays from './components/Plays'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Projects from './components/Projects'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll/dist/locomotive-scroll';

// import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
   const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  

  return (
    <div  ref={scrollRef} className='w-full min-h-screen  text-white'>
      <Navbar/>
      <Landing/>
      <div data-scroll data-scroll-section data-scroll-speed=".09">
      <Marquee/>
      <About/>
      </div>
      <Plays/>
      <Featured/>
      <Cards/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App