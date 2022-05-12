import {useRef, useState} from 'react'
import './App.css';

function App() {
  const [trackPlayed, setTrackPlayed] = useState(false);

  const playAndPause = () => {
    if (!trackPlayed) {
      audioRef.current.play()
      setTrackPlayed(prevState=>{
        return !prevState
      })
    } else {
      audioRef.current.pause()
      setTrackPlayed(prevState=>{
        return !prevState
      })
    }
  }
  const audioRef = useRef()

  return (
    <div className='App'>
      <audio controls ref={audioRef}>
        <source src="./music/Rick_Astley_-_Never_Gonna_Give_You_Up_47958276.mp3" type='audio/mpeg'>
        </source>
      </audio>
      <button onClick={playAndPause}>{trackPlayed ? "Pause" : 'Play'}</button>
    </div>
  );
}

export default App;
