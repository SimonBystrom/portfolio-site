import './App.scss';
import Navbar from './components/navbar'
import IntroCard from './components/introCard'
import AboutCard from './components/aboutCard'

function App() {
  return (
    <div className="App">
     <div className='content-wrapper'>
      <Navbar></Navbar>
      <div className='content-container'>
        <IntroCard></IntroCard>
        <AboutCard></AboutCard>
      </div>
     </div>
     <div className="foreground"></div>
    </div>
  );
}

export default App;
