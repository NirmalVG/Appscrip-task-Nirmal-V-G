"use client";
import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import styles from "./Products.module.css";

const Products = ({ props, show, mainItem, filteredData }) => {
    return (
        <Row>
            {filteredData?.map((products, index) => {
                return (
                    <Col
                
                        md={show ? 4 : 6}
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
