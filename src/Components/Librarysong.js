import React from "react";
import { playSong } from "../util";

const Librarysong = ({song, setCurrentSong, audioRef, isPlaying, songs, id, setSongs})=>{
    const songSelectHandler = ()=>{
        setCurrentSong(song);
        playSong(isPlaying, audioRef);
        // adding active state
        const newSong = songs.map(song =>{
            if(song.id === id){
                return{
                    ...song,
                    active:true,
                }
            } else return{
                ...song,
                active : false,
            }
        })
        setSongs(newSong);
    }
    return(
        <div onClick={songSelectHandler} className={`library-song ${song.active ? "select" : ""}`}>
            <img src={song.cover} alt={song.name} />
            <div  className="song-description">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
            </div>
        </div>
    )
}
export default Librarysong;