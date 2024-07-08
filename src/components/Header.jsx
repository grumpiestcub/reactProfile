import profilePicture from '../assets/avatar.jpg'
import '../App.css'
// need to import css and style as I go 

function Header() {
    return (
    <> 
    <div className="headerContainer">
        <div>
            <img className="profilePicture" src={profilePicture} />
        </div>
        <div className="profileName">
            grumpiestcub
        </div>
        <div className="profileAbout">
            just a dude
        </div>
    </div>
    </>
)
}

export default Header