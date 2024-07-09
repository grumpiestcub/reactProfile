import { useState } from "react";
import useSound from "use-sound";
import tone from '../assets/tone.wav'
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";
import '../App.css'

// old version of player to compare
// const [isPlaying, setIsPlaying] = useState(false);

// const [play, { pause }] = useSound(tone);

// const playingButton = () => {
//   if (isPlaying) {
//     pause();
//     setIsPlaying(false);
//   } else {
//     play();
//     setIsPlaying(true);
//   }
// };

// export default function Player() {
// return (
//     <div className='musicComponent'>
//         <h2>Playing Now</h2>
//         <img
//         className='musicCover'
//         src='https://i.ebayimg.com/images/g/RPEAAOSw9E5kC2rc/s-l1200.webp'
//         />
//         <div>
//             <h3 className='title'>tone</h3>
//             <p className='subTitle'>grumpiestcub</p>
//         </div>
//         <div>
//           <button className="playButton">
//             <IconContext.Provider value={{size: "3em", color: "#27ae60"}}>
//                 <BiSkipPrevious />
//             </IconContext.Provider>
//           </button>
//           { !isPlaying ? (
//             // is "isPlaying" the problem, is this a hook? 
//             <button className="playButton" onClick={playingButton}>
//                 <IconContext.Provider value={{ size: "3em", color: "#27ae60"}}>
//                     <AiFillPlayCircle />
//                 </IconContext.Provider>
//             </button>
//           ) : (
//             <button className="playButton" onClick={playingButton}>
//                 <IconContext.Provider value={{ size: "3em", color: "#27ae60" }}>
//                     <AiFillPauseCircle />
//                 </IconContext.Provider>
//             </button>
//           )}
//           <button className="playButton">
//             <IconContext.Provider value={{ size: "3em", color: "#27ae60 "}}>
//                 <BiSkipNext />
//             </IconContext.Provider>
//           </button>
//         </div>
//     </div>
// )}

// need to figure out how to make back and next buttons work, assuming I would need to add it to the function below
export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause }] = useSound(tone);

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  return (
    <div className='musicComponent'>
      <h2>Playing Now</h2>
      <img
        className='musicCover'
        src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjI_NHBRcuWBzWt3bjFlvI69gqGUc-JsUvj55071VuATT9oT1QG_N4Joz6tmfATEDmy2Gv_iKFeyX2n5FMHezfDYYnZhZ1cfPHEbP3Uj_tyPY2n-AiwNq6s5DaLgnoSEgJgcv9W/s1600/Little_Man_Dancing.jpg'
      />
      <div>
        <h3 className='title'>tone</h3>
        <p className='subTitle'>grumpiestcub</p>
      </div>
      <div>
        <button className="playButton">
          <IconContext.Provider value={{ size: "3em", color: "#27ae60" }}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>
        {!isPlaying ? (
          <button className="playButton" onClick={playingButton}>
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
        <button className="playButton">
          <IconContext.Provider value={{ size: "3em", color: "#27ae60 " }}>
            <BiSkipNext />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
}