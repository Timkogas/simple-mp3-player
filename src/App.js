import {useRef, useState} from 'react'
import './App.css';

function App() {
  const [trackPlayed, setTrackPlayed] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState(0)
  const [duration, setDuration] = useState(0)

  const playList = [{
    path: "./music/Buerak_-_Sportivnye_ochki_56989067.mp3",
    name: "Буерак - Спортивные очки"
  },{
    path: "./music/Rick_Astley_-_Never_Gonna_Give_You_Up_47958276.mp3",
    name: "Rick Astley - Never Gonna Give You Up"
  },{
    path: "./music/Yung_Lean_-_Ginseng_Strip_2002_64304188.mp3",
    name: "Yung Lean - Ginseng Strip 2002"
  },{
    path: "./music/Modern_Talking_-_Cheri_Cheri_Lady_47835463.mp3",
    name: "Modern Talking - Cheri Cheri Lady"
  }]

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
  const renderTrack = () => {
    audioRef.current.pause();
    audioRef.current.load();
    audioRef.current.play();
  }
  const nextTrack = () => {
    if (selectedTrack === playList.length - 1) {
      setSelectedTrack(0)
      renderTrack()
    } else {
      setSelectedTrack(selectedTrack+1)
      renderTrack()
    }
  }
  const prevTrack = () => {
    if (selectedTrack === 0) {
      setSelectedTrack(playList.length - 1)
      renderTrack()
    } else {
      setSelectedTrack(selectedTrack - 1)
      renderTrack()
    }
  }
  const audioRef = useRef()
  let widthProcentageProgressBar = 0
  const setWidthProcentageBar = () => {
    
  }


  return (
    <div className='App'>
      <div className='progress_bar_border'>
        <div className='progress_bar' style={{width: widthProcentageProgressBar + '%'}}></div>
      </div>
      <audio 
        controls 
        ref={audioRef} 
        onLoadedMetadata={()=>{
          setDuration(audioRef.current.duration)
        }}
      >
        <source src={playList[selectedTrack].path} type='audio/mpeg'>
        </source>
      </audio>
      <p className='track_name'>{playList[selectedTrack].name}</p>
      <p className='track_duration'>{Math.trunc(duration/60)}:{ Math.trunc(duration%60)}</p>
      <button onClick={prevTrack}>Prev</button>
      <button onClick={playAndPause}>{trackPlayed ? "Pause" : 'Play'}</button>
      <button onClick={nextTrack}>Next</button>
    </div>
  );
}

export default App;
