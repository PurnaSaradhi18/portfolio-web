// Certifications.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificationCard from "./certificationCard";
import Particle from "./Particle";
import cert1 from "../Assets/Certifications/cert1.png";
import cert3 from "../Assets/Certifications/cert3.png";
import cert2 from "../Assets/Certifications/cert2.png";

function Certifications() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certifications</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some certifications I’ve earned recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="certification-card">
            <CertificationCard
              imgPath={cert1}
            />
          </Col>
          <Col md={4} className="certification-card">
            <CertificationCard
              imgPath={cert2}
            />
          </Col>

          <Col md={4} className="certification-card">
            <CertificationCard
              imgPath={cert3}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
