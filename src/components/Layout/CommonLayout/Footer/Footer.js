import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <Container fluid className={`pe-5 ps-5 ${styles.footer}`}>
      <Row>
        <Col xs={6} sm={6} md={6} lg={6}>
          <p className={styles.newsletter_title}>BE THE FIRST TO KNOW</p>
          <p className={styles.newsletter_description}>
            Sign up for updates from mettā muse.
          </p>
          <div>
            <input type="email" id="email" name="email" className="pe-2" />
            <Button variant="secondary">Subscribe</Button>
          </div>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6}>
          <p className={styles.newsletter_title}>CONTACT US</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
