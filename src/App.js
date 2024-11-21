import React, {useRef,  useState } from "react";
// Adding styles
import "./styles/app.scss"
// Adding components
import Song from "./Components/song";
import Player from "./Components/Player";
import Library from "./Components/Library";
import Nav from "./Components/Nav";
import SnowfallComponent from "./Components/Snow";
// Adding date
import data from "./resourse";
function App() {
   // ref
   const audioRef = useRef();
   // Play Handler
   const playHandler = ()=>{
    if(isPlaying){
        audioRef.current.pause();
        setIsPlaying(!isPlaying);
    }
    else{
        audioRef.current.play();
        setIsPlaying(!isPlaying);
    }
}
  const [songs, setSongs] = useState(data);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  // SnowFall
  const [showSnowfall, setShowSnowfall] = useState(false);
  const [mode, setMode] = useState(false);
    const modebg = () =>{
        setMode(!mode);
    }

  return (
    <div className={`App ${libraryStatus ? "library-active": ""} ${mode ? "dark-mode" : "light-mode"}`}>
      {showSnowfall && <SnowfallComponent setShowSnowfall={setShowSnowfall}/>}
      <Nav modebg ={modebg} mode={mode} libraryStatus={libraryStatus}  setLibraryStatus={setLibraryStatus} showSnowfall = {showSnowfall} setShowSnowfall={setShowSnowfall}/>
      <Song currentSong = {currentSong}/>
      <Player setSongs={setSongs} setCurrentSong={setCurrentSong} songs={songs} currentSong = {currentSong} isPlaying = {isPlaying} setIsPlaying = {setIsPlaying} audioRef={audioRef} playHandler={playHandler} />
      <Library  libraryStatus={libraryStatus} setLibraryStatus= {setLibraryStatus} songs = {songs} setCurrentSong= {setCurrentSong} audioRef={audioRef} isPlaying={isPlaying} setSongs={setSongs}/>
    </div>
  );
}

export default App;
