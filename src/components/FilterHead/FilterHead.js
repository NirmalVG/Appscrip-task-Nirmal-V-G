"use client";
import React from "react";
import { Row, Col } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";
import styles from "./FilterHead.module.css";
import Select from "react-select";
import { IoIosArrowForward } from "react-icons/io";

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

const FilterHead = ({ showFilter, show, props, handleFilter }) => {
  const style = {
    control: (base) => ({
      ...base,
      border: 0,
      boxShadow: "none",
    }),
  };
  return (
    <div className="pe-5 ps-5">
      <Row className="pt-2 pb-2">
        <Col md={4} lg={2}>
          <p className={styles.filter_count}>{props?.length} ITEMS</p>
        </Col>
        <Col md={4} lg={8}>
          <div className={`${styles.side} pe-2`}>
            {show ? <IoIosArrowBack /> : <IoIosArrowForward />}
          </div>
          <div clasName={styles.side}>
            <button onClick={showFilter} className={styles.filter_button}>
              {show ? "HIDE FILTER" : "SHOW FILTER"}
            </button>
          </div>
        </Col>
        <Col  md={4} lg={2}>
          <Select
            className={styles.select_option}
            classNamePrefix="select"
            defaultValue={options[0]}
            components={{
              IndicatorSeparator: () => null,
            }}
            name="color"
            onChange={handleFilter}
            isSearchable={false}
            options={options}
            styles={style}
          />
        </Col>
      </Row>
    </div>
  );
};

export default FilterHead;
