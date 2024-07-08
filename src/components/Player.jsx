import { useEffect, useState } from "react";
import useSound from "use-sound";
import tone from '../assets/tone.wav'
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";
import '../App.css'

const [isPlaying, setIsPlaying] = useState(false);

const [play, { pause, duration, sound }] = useSound(tone);

const playingButton = () => {
  if (isPlaying) {
    pause();
    setIsPlaying(false);
  } else {
    play();
    setIsPlaying(true);
  }
};

export default function Player() {
return (
    <div className='musicComponent'>
        <h2>Playing Now</h2>
        <img
        className='musicCover'
        src='https://i.ebayimg.com/images/g/RPEAAOSw9E5kC2rc/s-l1200.webp'
        />
        <div>
            <h3 className='title'>tone</h3>
            <p className='subTitle'>grumpiestcub</p>
        </div>
        <div>
          <button className="playButton">
            <IconContext.Provider value={{size: "3em", color: "#27ae60"}}>
                <BiSkipPrevious />
            </IconContext.Provider>
          </button>
          { !isPlaying ? (
            <button className="playButton" onClick={playingButton}>
                <IconContext.Provider value={{ size: "3em", color: "#27ae60"}}>
                    <AiFillPlayCircle />
                </IconContext.Provider>
            </button>
          ) : (
            <button className="playButton" onClick={playingButton}>
                <IconContext.Provider value={{ size: "3em", color: "#27ae60" }}>
                    <AiFillPauseCircle />
                </IconContext.Provider>
            </button>
          )}
          <button className="playButton">
            <IconContext.Provider value={{ size: "3em", color: "#27ae60 "}}>
                <BiSkipNext />
            </IconContext.Provider>
          </button>
        </div>
    </div>
)}