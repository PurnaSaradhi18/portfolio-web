import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Purna Saradhi Chinthapalli </span>
            from <span className="purple"> Andhra Pradesh, India.</span>
            <br />
            I am currently pursuing CSE in B.Tech from Lovely Professional University.
            <br />
            <br />
            I am Proficient in building responsive, scalable, and dynamic web applications using modern technologies including React.js, Node.js, MongoDB, Express.js, and Tailwind CSS. Experienced in developing real-world projects, integrating RESTful APIs, and deploying full-stack applications.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Video Editing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Purna Saradhi Chinthapalli</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
