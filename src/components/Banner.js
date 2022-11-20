import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import headerImage from "../assets/img/loading.gif";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Development", "Web Designer", "UI/UX Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] useState(300 - Math.random() * 100)
  const period = 2000;

  useEffect(() =>{
    let ticker = setInterval (() => {
      ticker();

    }, delta)
    return () => {clearInterval(ticker)}

  }, [text])
  
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="Hi, I'm Jack"></span>
            <h1>
              {`Welcome to my Portfolio`} <br></br>
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
