import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FooterScreen = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy;ShoppingMania</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterScreen;
