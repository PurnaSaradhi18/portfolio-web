import React from "react";
import Card from "react-bootstrap/Card";

function CertificationCard({ imgPath }) {
  return (
    <Card className="certification-card-view">
      <Card.Img variant="top" src={imgPath} className="certification-card-img" />
    </Card>
  );
}

export default CertificationCard;
