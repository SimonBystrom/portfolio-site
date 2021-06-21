import './App.scss';
import Navbar from './components/navbar'
import IntroCard from './components/introCard'
import AboutCard from './components/aboutCard'
import ProjectList from './components/projectList'
import Socials from './components/socials'

function App() {
  return (
    <div className="App">
     <div className='content-wrapper'>
      <Navbar />
      <Socials />
      <div className='content-container'>
        <IntroCard />
        <AboutCard />
        <ProjectList />
      </div>
     </div>
     {/* <div className="gradient"></div> */}
     <div className="foreground"></div>
    </div>
  );
}

export default App;
