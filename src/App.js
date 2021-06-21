import './App.scss';
import {useEffect} from 'react'
import Navbar from './components/navbar'
import IntroCard from './components/introCard'
import AboutCard from './components/aboutCard'
import ProjectList from './components/projectList'
import Socials from './components/socials'
import Contact from './components/contact'
import AOS from 'aos'
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
    })
  }, [])

  return (
    <div className="App">
     <div className='content-wrapper'>
      <Navbar />
      <Socials />
      <div className='content-container'>
        <IntroCard />
        <AboutCard />
        <ProjectList />
        <Contact />
      </div>
     </div>
     {/* <div className="gradient"></div> */}
     <div className="foreground"></div>
    </div>
  );
}

export default App;
