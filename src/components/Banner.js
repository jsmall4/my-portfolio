import { Col, Container, Row } from "react-bootstrap";
import headerImage from "../assets/img/loading.gif";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="Hi, I'm Jack"></span>
            <h1>
              {`Welcome to my Portfolio`}
              <span className="wrap">Learning all things Web Development!</span>
            </h1>
            <p>
              Currently on the journey of learning Full Stack Web Development
            </p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImage} alt="headerImage" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
