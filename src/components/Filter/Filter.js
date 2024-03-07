"use client";
import React from "react";
import styles from "./Filter.module.css";
import { Accordion } from "react-bootstrap";

const Filter = () => {
  return (
    <div>
      <div>
        <input type="checkbox" id="customize" name="customize" />
        <label for="customize" className="ps-2">
          CUSTAMIZABLE
        </label>
      </div>
      <hr />
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header className={styles.filter_head}>
            OCCASION
          </Accordion.Header>
          <Accordion.Body>
            <p className={styles.all}>All</p>
            <p className={styles.unselected}>Unselected</p>
            <div>
              <input type="checkbox" id="men" name="men" className="pe-2" />
              <label for="men" className={`${styles.gender_type} ps-2`}>
                Men
              </label>
            </div>
            <div>
              <input type="checkbox" id="women" name="women" className="pe-2" />
              <label for="women" className={`${styles.gender_type} ps-2`}>
                Women
              </label>
            </div>
            <div>
              <input type="checkbox" id="baby" name="baby" className="pe-2" />
              <label for="baby" className={`${styles.gender_type} ps-2`}>
                Baby & Kids
              </label>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Filter;
