
import React from "react";
import Librarysong from "./Librarysong";

const Library = ({songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus}) =>{
    return (
        <div className={`library ${libraryStatus ? "active-library" : ""}`}>
            <h2>Library</h2>
                {songs.map((song) => (
                    <Librarysong  song={song} setCurrentSong={setCurrentSong} key={song.id} audioRef={audioRef} isPlaying={isPlaying} songs={songs} id={song.id} setSongs={setSongs}/>
                ))}
        </div>
    )
}
export default Library; 