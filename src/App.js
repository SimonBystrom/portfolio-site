import './App.scss';
import {Navbar} from './components/navbar'

function App() {
  return (
    <div className="App">
     <div className="background-gradient"></div>
     <div className='content-container'>
      <Navbar></Navbar>
     </div>
     <div className="for-ground"></div>
    </div>
  );
}

export default App;
