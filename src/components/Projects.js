import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'

import { ArrowUpRight } from 'react-feather';

import "./Projects.css"

function Projects(){
    const projects = [
        {
            name: "Presidential Chatbots", 
            links: [{name: "BidenBot", url:"https://icitizen.com/bidenbot"}, {name: "TrumpBot", url: "https://icitizen.com/trumpbot"}],
            description:<> 
                <p>Chatbots which allow users to interact with candidates in the 2024 US Presidential Election in a similar manner to ChatGPT. </p>
                <p> Hosted on existing political polling site, <a href="https://iciitzen.com">icitizen.com</a></p>
                <p>Done in AWS Amplify. React frontend, serverless NodeJS which use LlamaIndex with OpenAI's gpt3.5-turbo to synthesize a collection
                    of relevant speakings/news articles with the user's chat to generate a response. 
                </p>
            </>
        },
        {
            name: "Wheels", 
            links: [{name: "GitHub", url: "https://github.com/evanclough/wheels"}],
            description:<> 
                <p>
                    Barebones neural network library written from the ground-up in C++, written to gain a better understanding of 
                    lower level ML concepts - "re-inventing the wheel". Capable of simple machine learning tasks, including MNIST Handwritten Digit classification (albeit rather slowly 😄)
                </p>
                <p>
                    Manual implementation of backpropagation, batching, regularization, and multiple different optimizers.
                </p>
            </>
        },
        {
            name: "Chapter Portal",
            links: [{name: "demo video", url: ""}],
            description: <>
                <p>Web-application for my Fraternity, including utilities for Event Management, Billing, and Family Tree Generation, and an ELO system for a commonly played game.</p>
                <p>Entirely behind authentication, each brother has their own account.</p>
                <p>Will hopefully save the chapter around $1,000 a year on proprietary billing software.</p>
                <p>Created with AWS Amplify.</p>
            </>
        }
    ]

    return (
        <div className="mx-auto proj-container">
            <Row xs={1} md={3} className="g-4 mb-2">
            {projects.map((project, idx) => (
                <Col key={idx} className="w-100">
                <Card bg="dark" className="proj-card pt-1 mx-auto">
                    <Card.Body>
                        <h3>{project.name}</h3>
                            <div>
                                {project.links.map((lnk, idx) => (
                                    <span className="lnk-spn"><a href={lnk.url} className><Button className="lnk-btn">{lnk.name} <ArrowUpRight size={18}/> </Button></a></span>
                                ))}
                            </div>
                        <hr/>
                        {project.description}
                    </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>
        </div>
      );
}

export default Projects;