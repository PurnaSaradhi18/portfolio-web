import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/home-main.svg";
import myPhoto from "../../Assets/myPhoto.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import About from "../About/About";
import Type from "./Type";
import Projects from "../Projects/Projects";
import ResumeNew from "../Resume/ResumeNew";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Purna Saradhi Chinthapalli</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20, textAlign: "center" }}>
              <img
                src={myPhoto}
                alt="Purna Saradhi"
                className="img-fluid rounded-circle"
                style={{
                  width: "350px",
                  height: "350px",
                  objectFit: "cover",
                  marginBottom: "15px",
                  border: "3px solid #fff",
                }}
              />
              {/* <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "380px" }}
              /> */}
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
      <Projects />
      <ResumeNew />
      <Home2 />
    </section>
  );
}

export default Home;
