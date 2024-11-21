import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight, faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { playSong } from "../util";

const Player = ({currentSong, isPlaying, setIsPlaying, audioRef, playHandler, songs, setCurrentSong, setSongs})=>{
    // State
    const[songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0
    });
    // SkipTruck handler

    const skipTruckHandler = (direction)=>{
        let currentIndex = songs.findIndex((song)=>song.id === currentSong.id);
        if(direction === "skip-forward"  ){
            setCurrentSong(songs[(currentIndex+1)%songs.length]);
        }
        if(direction === "skip-back"  ){
            if((currentIndex-1)%songs.length === -1){
                setCurrentSong(songs[songs.length-1]);
                playSong(isPlaying, audioRef);
                return;
            }
            setCurrentSong(songs[(currentIndex-1)%songs.length]);
        }
        playSong(isPlaying, audioRef);
    }
    useEffect(()=>{
        const newSong = songs.map(song =>{
            if(song.id === currentSong.id){
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
    }, [currentSong])

    const timeUpDateHandler = (e)=>{
        const current = e.target.currentTime;
        const duration = e.target.duration || 0;
        setSongInfo({
            ...songInfo,
            currentTime: current,
            duration,
        })      
    }
   
    
    const getTime = (time)=>{
        return(Math.floor(time/60)+":"+("0"+Math.floor(time%60)).slice(-2))
    }
    const drugTime = (e)=>{
        audioRef.current.currentTime = e.target.value;
        setSongInfo({
            ...setSongInfo,
            currentTime: e.target.value,
        })
    }
    return(
        <div className="Player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input type="range" min="0" max={songInfo.duration} value={songInfo.currentTime} onChange={drugTime}/>
                <p>{songInfo.duration ? getTime(songInfo.duration): "0:00"}</p>
            </div>
            <div className="player-control">
                <FontAwesomeIcon onClick={()=>skipTruckHandler("skip-back")} className="play-back" icon={faAngleLeft} size="2x" />
                <FontAwesomeIcon onClick={playHandler} className="play" icon={isPlaying ? faPause : faPlay } size="2x"/>
                <FontAwesomeIcon onClick={()=>skipTruckHandler("skip-forward")} className="play-forward" icon={faAngleRight} size="2x" />
            </div>
            <audio onLoadedMetadata={timeUpDateHandler} onTimeUpdate={timeUpDateHandler} ref={audioRef} src={currentSong.audio}></audio>
        </div>
    )
}
export default Player;