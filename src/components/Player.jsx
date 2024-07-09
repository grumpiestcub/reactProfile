import { useEffect, useState } from "react";
import useSound from "use-sound";
import tone from '../assets/tone.wav'
import sunday from '../assets/sunday.wav'
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";
import '../App.css'

// need to figure out how to make back and next buttons work, assuming I would need to add it to the function below
export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playlist] =useState([
    {title: "tone", url: { tone }},
    {title: "sunday", url: { sunday }},
  ]);
  const [audioContext, setAudioContext] = useState(null);

  const initializeAudioContext = () => {
    if (!audioContext) {
      const context = new (window.AudioContext || window.webkitAudioContext)();
      setAudioContext(context);
      console.log("AudioContext initialized")
    } else if (audioContext.state === 'suspended') {
      audioContext.resume().then(() => {
        console.log("AudioContext resumed");
      });
    }
  };

  useEffect(() => {
    if (audioContext) {
      return () => {
        audioContext.close();
      };
    }
  }, [audioContext]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [play, { pause }] = useSound([currentSongIndex]);

  const nextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % playlist.length)
  };

  const prevSong = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? playlist.length -1 : prevIndex -1
    );
  };

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  const handleClick = () => {
    initializeAudioContext();
    playingButton();
  };

  return (
    <div className='musicComponent'>
      <h2>Playing Now</h2>
      <img
        className='musicCover'
        src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjI_NHBRcuWBzWt3bjFlvI69gqGUc-JsUvj55071VuATT9oT1QG_N4Joz6tmfATEDmy2Gv_iKFeyX2n5FMHezfDYYnZhZ1cfPHEbP3Uj_tyPY2n-AiwNq6s5DaLgnoSEgJgcv9W/s1600/Little_Man_Dancing.jpg'
      />
      <div>
        <h3 className='title'>{playlist[currentSongIndex].title}</h3>
        <p className='subTitle'>grumpiestcub</p>
      </div>
      <div>
        <button className="playButton">
          <IconContext.Provider value={{ size: "3em", color: "#27ae60" }} onClick={prevSong}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>
        {!isPlaying ? (
          <button className="playButton" onClick={handleClick}>
            <IconContext.Provider value={{ size: "3em", color: "#27ae60" }}>
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
        <button className="playButton" onClick={nextSong}>
          <IconContext.Provider value={{ size: "3em", color: "#27ae60 " }}>
            <BiSkipNext />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
}