import profilePicture from "../assets/avatar.jpg"
// need to import css and style as I go 

function Header() {
    return (
    <> 
    <div className="headerContainer">
        <div className="profilePicture">
            <img src={profilePicture} />
        </div>
        <div className="profileName">

        </div>
        <div className="profileAbout">

        </div>
    </div>
    </>
)
}

export default Header