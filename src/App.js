import './App.scss';
import Navbar from './components/navbar'
import IntroCard from './components/introCard'

function App() {
  return (
    <div className="App">
     <div className='content-wrapper'>
      <Navbar></Navbar>
      <div className='content-container'>
        <div className='introCard-container'>
          <IntroCard></IntroCard>
        </div>
        <div className='introCard-container'>
          <IntroCard></IntroCard>
        </div>
        <div className='introCard-container'>
          <IntroCard></IntroCard>
        </div>
      </div>
     </div>
     <div className="foreground"></div>
    </div>
  );
}

export default App;
