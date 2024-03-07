"use client";
import React from "react";
import { Row, Col } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";
import styles from "./FilterHead.module.css";
import Select from "react-select";

const options = [
  {
    label: "RECOMMENDED",
    value: "RECOMMENDED",
  },
  {
    label: "NEWEST FIRST",
    value: "NEWEST FIRST",
  },
  {
    label: "POPULAR",
    value: "POPULAR",
  },
  {
    label: "PRICE:HIGH TO LOW",
    value: "PRICE:HIGH TO LOW",
  },
  {
    label: "PRICE:LOW TO HIGH",
    value: "PRICE:LOW TO HIGH",
  },
];

const FilterHead = ({showFilter}) => {
  return (
    <div className="pe-5 ps-5">
      <Row className="pt-2 pb-2">
        <Col xs={2} sm={2} md={2} lg={2}>
          <p className={styles.filter_count}>3425 ITEMS</p>
        </Col>
        <Col xs={8} sm={8} md={8} lg={8}>
          <div className={`${styles.side} ${styles.hide_filter} pe-3`}>
            <IoIosArrowBack />
          </div>
          <div clasName={styles.side}>
            <button onClick={showFilter}>HIDE FILTER</button>
          </div>
        </Col>
        <Col xs={2} sm={2} md={2} lg={2}>
          <Select
            className="basic-single"
            classNamePrefix="select"
            defaultValue={options[0]}
            name="color"
            options={options}
          />
        </Col>
      </Row>
    </div>
  );
};

export default FilterHead;
