import '../App.css'
import spotifyImage from '../assets/spotify.png'
import bandImage from '../assets/bandcamp.png'

function Buttons() {
    return (
        <>
        <div classname="row">
                <a href="https://open.spotify.com/artist/0W7rttZuVqDXlJhEQpNpgb">
                <img width="90px" src={spotifyImage}/>
                </a>
                <a href="https://grumpiestcub.bandcamp.com/">
                <img width="100px" src={bandImage} />
                </a>
        </div>
        </>
    )
}

export default Buttons