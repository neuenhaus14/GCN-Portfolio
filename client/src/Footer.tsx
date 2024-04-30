import { Container, Row, Col } from "react-bootstrap";


import logo from "./img/ggLogo.png"
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FaMedium } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/gretchen-neuenhaus/" className="linkedIn-social">
                <FaLinkedinIn color="#9e9e9e" size="30px" />
              </a>
              <a href="https://github.com/neuenhaus14/" className="github-social">
                <AiFillGithub color="#9e9e9e" size="30px" />
              </a>
              <a href="https://medium.com/@neuenhaus14/" className="medium-social">
                <FaMedium color="#9e9e9e" size="30px" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer;