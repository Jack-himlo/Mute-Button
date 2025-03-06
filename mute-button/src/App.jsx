import { useState } from 'react'
import './App.css'
import onIcon from './on.svg';
import offIcon from './off.svg';

function App(){
  const [mute, setMute] = useState(false);

  const toggleMute = () => {
    setMute(!mute);
  }

  return(
    <div>
    <button onClick={toggleMute}>
      <img src={mute ? offIcon : onIcon}/>
    </button>
    </div>
  );
}


export default App;