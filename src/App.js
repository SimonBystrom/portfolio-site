import './App.scss';
import Navbar from './components/navbar'
import IntroCard from './components/introCard'
import AboutCard from './components/aboutCard'
import ProjectCard from './components/projectCard'

function App() {
  return (
    <div className="App">
     <div className='content-wrapper'>
      <Navbar />
      <div className='content-container'>
        <IntroCard />
        <AboutCard />
        <ProjectCard />
      </div>
     </div>
     {/* <div className="gradient"></div> */}
     <div className="foreground"></div>
    </div>
  );
}

export default App;
