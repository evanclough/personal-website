import Button from "react-bootstrap/Button";
import Card  from "react-bootstrap/Card";
import { GitHub, Linkedin, Mail } from "react-feather";
import "./Profile.css"


function Profile(){

    return (
        <div className="prof-container">
            <Card bg="dark" className="prof-card pt-1 mx-auto">
                    <Card.Body>
                        <Card.Text>
                            <h3>Evan Clough</h3>
                            <hr/>
                            <p>Senior computer science student at RIT, primarily interested in AI/ML</p>
                            <hr/>
                            <p><GitHub size={18} className="mx-1"/> <a href="https://github.com/evanclough">evanclough</a></p>
                            <p><Linkedin size={18} className="mx-1"/> <a href="https://linkedin.com/in/cloughevan">cloughevan</a></p>
                            <p><Mail size={18} className="mx-1"/> evanclough99[at]gmail.com</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            
            
        </div>
    )
}

export default Profile;