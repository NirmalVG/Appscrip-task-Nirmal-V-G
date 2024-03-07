"use client";
import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import styles from "./Products.module.css";

const Products = ({ props }) => {
  console.log(props, "props");
  return (
    <Row>
      {props?.map((products, index) => {
        return (
          <Col xs={4} sm={4} md={4} lg={4} key={index} className="pb-5">
            <Card>
              <Card.Img
                variant="top"
                src={products.image}
                className={styles.card_img}
              />
              <Card.Body>
                <Card.Title>{products.title.slice(0, 35)}...</Card.Title>
                <Card.Text>{products.description.slice(0, 250)}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default Products;
