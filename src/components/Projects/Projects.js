import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import suicide from "../../Assets/Projects/suicide.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Real State Web App(MERN)"
              description="My Real Estate Management Web Application, powered by the MERN stack, Redux, JWT, and Firebase, revolutionizes property management. Users navigate a user-friendly interface to browse comprehensive property listings with detailed descriptions, images, and amenities. Robust user authentication via JWT ensures secure access, while Redux manages state efficiently."
              ghLink="https://github.com/Arijeet04/MERNState"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Suicide_Detection_Project_Using_ML"
              description="My solution employs advanced NLP techniques to analyze the language used in student forum posts. This approach allows us to identify patterns indicating emotional turmoil, depression, or thoughts of self-harm, enabling early intervention and support.."
              ghLink="https://github.com/Arijeet04/Suicide_Detection_Project_Using_ML"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="FitBot_Your-Personal-Trainer-Chatbot "
              description="FitBot is an interactive chatbot that serves as your personal gym trainer. It helps you with workout routines, provides exercise recommendations,and even suggests instructional videos for a better understanding of fitness techniques. With 
              FitBot, you can have a conversation with a knowledgeable and dedicated virtual trainer to get guidance on your fitness goals."
              ghLink="https://github.com/Arijeet04/FitBot_Your-Personal-Trainer-Chatbot"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
