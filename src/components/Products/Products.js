"use client";
import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import styles from "./Products.module.css";

const Products = ({ props, show }) => {
  console.log(props, "props")
    return (
        <Row>
            {props?.map((products, index) => {
                return (
                    <Col
                        xs={show ? 4 : 3}
                        sm={show ? 4 : 3}
                        md={show ? 4 : 3}
                        lg={show ? 4 : 3}
                        key={index}
                        className="pb-5"
                    >
                        <Card>
                            <Card.Img
                                variant="top"
                                src={products.image}
                                className={styles.card_img}
                            />
                            <Card.Body>
                                <Card.Title>
                                    {products.title.slice(0, 35)}...
                                </Card.Title>
                                <Card.Text>
                                    {products.description.slice(0, 250)}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                );
            })}
        </Row>
    );
};

export default Products;
