"use client";
import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import styles from "./Products.module.css";

const Products = ({ props, show }) => {
  console.log(props, "props");
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
            <Card className="h-100">
              <figure className={styles.card_img_wrap}>
                <Card.Img
                  variant="top"
                  src={products.image}
                  className={styles.card_img}
                />
              </figure>
              <Card.Body>
                <Card.Title className="line-clamp-2">
                  {products.title}
                </Card.Title>
                <Card.Text className="line-clamp-3">
                  {products.description}
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
