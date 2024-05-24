import Button from "react-bootstrap/Button";
import { GitHub, Linkedin } from "react-feather";
import "./Profile.css"

function Profile(){

    return (
        <div>
            <p>Senior computer science student at RIT, interested in AI</p>
            <a href="https://github.com/evanclough"><Button className="lnk-btn mx-1"><GitHub size={18}/> </Button></a>
            <a href="https://www.linkedin.com/in/cloughevan/"><Button className="lnk-btn mx-1"><Linkedin size={18}/> </Button></a>
            <p className="mt-2">Contact: evanclough99[at]gmail[dot]com</p>
        </div>
    )
}

export default Profile;