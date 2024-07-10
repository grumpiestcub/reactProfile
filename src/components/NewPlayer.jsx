import { useEffect, useState } from "react";
import useSound from "use-sound";
import tone from '../assets/tone.wav';
import sunday from '../assets/sunday.wav';
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";
import '../App.css';

{/*
  need to figure out if the isPlaying state is fighting with useSound or not.
  If not then why is stop() not working? 
  Need to read more about useSound documentation, and howler documentation. 
  Might be best to re-write and find new approach, but need to spend time in the documentation
  first. 
  */}

export default function NewPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const playlist = [
    { title: "tone", url: tone },
    { title: "sunday", url: sunday },
  ];

  const [play, {pause, sound }] = useSound(playlist[currentSongIndex].url);

  // useEffect(() => 
  // {
  //   console.log("useEffectBitch")
  //   if (sound) {
  //     if (isPlaying) {
  //       play();
  //     } else {
  //       pause();
  //     }
  //   }
  // }, [currentSongIndex, isPlaying, play, pause, sound]);

  const nextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % playlist.length);
    console.log("currentSongIndexChanged")
  };

  const prevSong = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? playlist.length - 1 : prevIndex - 1
    );
  };

  const handlePlayPause = () => {
    // setIsPlaying(!isPlaying);
    play();
  };

  return (
    <div className='musicComponent'>
      <h2>Playing Now</h2>
      <img
        className='musicCover'
        src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjI_NHBRcuWBzWt3bjFlvI69gqGUc-JsUvj55071VuATT9oT1QG_N4Joz6tmfATEDmy2Gv_iKFeyX2n5FMHezfDYYnZhZ1cfPHEbP3Uj_tyPY2n-AiwNq6s5DaLgnoSEgJgcv9W/s1600/Little_Man_Dancing.jpg'
        alt='Album cover'
      />
      <div>
        <h3 className='title'>{playlist[currentSongIndex].title}</h3>
        <p className='subTitle'>grumpiestcub</p>
      </div>
      <div>
        <button className="playButton" onClick={prevSong}>
          <IconContext.Provider value={{ size: "3em", color: "#27ae60" }}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>
        {!isPlaying ? (
          <button className="playButton" onClick={handlePlayPause}>
            <IconContext.Provider value={{ size: "3em", color: "#27ae60" }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </button>
        ) : (
          <button className="playButton" onClick={handlePlayPause}>
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