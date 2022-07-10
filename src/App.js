import './App.css';
import { useState,useRef,useEffect } from 'react'; 

import Project from './screen/project.js'
import Name from './screen/name.js'
import About from './screen/about.js'
import Education from './screen/education.js'
import Skill from './screen/skill.js'
import Contact from './screen/contact.js'
import logo from './assets/logo1.png'
export default function App() {
  const prevScrollY = useRef(0);

  const [goingUp, setGoingUp] = useState(false);
  const [vh,setvh] = useState(0);
  const [currentScrollY,setcurrent] = useState(0)
  const [index,setindex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      setcurrent(window.scrollY);
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }

      prevScrollY.current = currentScrollY;
      setindex(Math.floor(currentScrollY/vh)-2)
    };

    window.addEventListener("scroll", handleScroll, { passive: true});
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(()=>{
    setvh(Math.round(window.document.documentElement.clientHeight))
  },[])

  return (
    <div className="App">
    <nav>     
     <div id="parent">
     <a href='.name'><img className='logo' src = {logo}></img></a>
       <div class="child"><a href = "#about">About</a></div>
       <div class="child"><a href = "#education">Education</a></div>
       <div class="child"><a href = "#project">Projects</a></div>
       <div class="child"><a href = "#skill">Skills</a></div>
       <div class="child"><a href = "#contact">Contact</a></div>
   </div>
   </nav>
      <Name/>
      <About position={currentScrollY}/>
      <Education position={currentScrollY}/>
      <Project  index={index}/>
      <Skill index={index}/>
      <Contact />
    </div>      
  )
}

