"use client"
import React, {useState} from "react";
import Products from "../Products/Products";
import Filter from "../Filter/Filter";
import { Row, Col } from "react-bootstrap";
import FilterHead from "../FilterHead/FilterHead";

const ProductList = ({ props }) => {
    const [show, setShow] = useState(false);

    const showFilter = () => {
        setShow(!show);
    };
    return (
        <>
            <FilterHead showFilter={showFilter}/>
            <Row className="pe-5 ps-5">
                {show && (
                    <Col xs={3} sm={3} md={3} lg={3}>
                        <Filter />
                    </Col>
                )}
                <Col xs={show ? 9 : 12} sm={show ? 9 : 12} md={show ? 9 : 12} lg={show ? 9 : 12}>
                    <Products props={props} show={show}  />
                </Col>
            </Row>
        </>
    );
};

export default ProductList;
