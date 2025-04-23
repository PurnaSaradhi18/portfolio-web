import React from "react";
import Card from "react-bootstrap/Card";
// import { Container, Row, Col } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";
// import laptopImg from "../../Assets/about.png";


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
          <p className="home-about-body">
                    I fell in love with programming and I have at least learnt
                    something, I think… 🤷‍♂️
                    <br />
                    <br />I am fluent in classics like
                    <i>
                      <b className="purple"> C++, Javascript and Go. </b>
                    </i>
                    <br />
                    <br />
                    My field of Interest's are building new &nbsp;
                    <i>
                      <b className="purple">Web Technologies and Products </b> and
                      also in areas related to{" "}
                      <b className="purple">
                        Blockchain.
                      </b>
                    </i>
                    <br />
                    <br />
                  </p>
          {/* <Container>
            <Container>
              <Row>
                <Col md={8} className="home-about-description">
                  <p className="home-about-body">
                    I fell in love with programming and I have at least learnt
                    something, I think… 🤷‍♂️
                    <br />
                    <br />I am fluent in classics like
                    <i>
                      <b className="purple"> C++, Javascript and Go. </b>
                    </i>
                    <br />
                    <br />
                    My field of Interest's are building new &nbsp;
                    <i>
                      <b className="purple">Web Technologies and Products </b> and
                      also in areas related to{" "}
                      <b className="purple">
                        Blockchain.
                      </b>
                    </i>
                    <br />
                    <br />
                  </p>
                </Col>
                <Col md={4} style={{ paddingTop: "220px", paddingBottom: "50px" }}
            className="my-avatar">
                    <img src={laptopImg} className="img-fluid" alt="avatar" />
                </Col>
              </Row>
            </Container>
          </Container> */}

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
