import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <Container fluid className={`pe-5 ps-5 ${styles.footer}`}>
            <Row>
                <Col xs={6} sm={6} md={6} lg={6}>
                    <p className={styles.newsletter_title}>
                        BE THE FIRST TO KNOW
                    </p>
                    <p className={styles.newsletter_description}>
                        Sign up for updates from mettā muse.
                    </p>
                    <div>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="pe-2"
                        />
                        <Button variant="secondary">Subscribe</Button>
                    </div>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6}>
                    <div>
                        <p className={styles.newsletter_title}>CONTACT US</p>
                        <p>+44 221 133 5360</p>
                        <p>customercare@mettamuse.com</p>
                    </div>
                    <div>
                        <p className={styles.newsletter_title}>CONTACT US</p>
                        <p>USD</p>
                        <p>
                            Transactions will be completed in Euros and a
                            currency reference is available on hover.
                        </p>
                    </div>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col xs={4} sm={4} md={4} lg={4}>
                    <h3>mettā muse</h3>
                    <p>About Us</p>
                    <p>Artisans</p>
                    <p>Boutiques</p>
                    <p>Contact Us</p>
                    <p>EU Compliances Docs</p>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4}>
                    <h3>Quick Links</h3>
                    <p>Orders & Shipping</p>
                    <p>Join/Login as a Seller</p>
                    <p>Payment & Pricing</p>
                    <p>Return & Refunds</p>
                    <p>FAQs</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4}>
                    <div>
                        <h3>Follow Us</h3>
                    </div>
                    <div>
                        <h3>mettā muse Accepts</h3>
                    </div>
                </Col>
            </Row>
            <Row>
              <p>Copyright © 2023 mettamuse. All rights reserved.</p>
            </Row>
        </Container>
    );
};

export default Footer;
