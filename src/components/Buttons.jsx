import '../App.css'
import spotifyImage from '../assets/spotify.png'
import bandImage from '../assets/bandcamp.png'
import appleImage from '../assets/apple.png'

function Buttons() {
    return (
        <>
        <div classname="musicRow">
                <a target="_blank" href="https://open.spotify.com/artist/0W7rttZuVqDXlJhEQpNpgb">
                <img className='spotifyImage' width="40px" src={spotifyImage}/>
                </a>
                <a target="_blank" href="https://grumpiestcub.bandcamp.com/">
                <img className='bandcampImage' width="50px" src={bandImage} />
                </a>
                <a target="_blank" href="https://music.apple.com/us/artist/grumpiestcub/1619364115">
                <img className='appleImage' width="50px" src={appleImage} />
                </a>
        </div>
        </>
    )
}

export default Buttons