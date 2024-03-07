import React from "react";
import Products from "../Products/Products";
import Filter from "../Filter/Filter";
import { Row, Col } from "react-bootstrap";

const ProductList = ({ props }) => {
  return (
    <Row className="pe-5 ps-5">
      <Col xs={3} sm={3} md={3} lg={3}>
        <Filter />
      </Col>
      <Col xs={9} sm={9} md={9} lg={9}>
        <Products props={props} />
      </Col>
    </Row>
  );
};

export default ProductList;
