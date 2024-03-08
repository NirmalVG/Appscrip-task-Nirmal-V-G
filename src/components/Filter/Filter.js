"use client";
import React, { useState } from "react";
import styles from "./Filter.module.css";
import { Accordion } from "react-bootstrap";

const filterTitle = [
    { title: "IDEAL FOR" },
    { title: "OCCASION" },
    { title: "WORK" },
    { title: "FABRIC" },
    { title: "SEGMENT" },
    { title: "SUITABLE FOR" },
    { title: "ROW MATERIALS" },
    { title: "PATTERN" },
];

const Filter = ({ unselectAll, selectedItems, toggleSelection }) => {
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
                {filterTitle.map((filter, index) => {
                    return (
                        <Accordion.Item eventKey={index} key={index}>
                            <Accordion.Header
                                className={`${styles.filter_head}${styles.accordion}`}
                            >
                                <div>
                                    <p className={styles.accordion_title}>
                                        {filter.title}
                                    </p>
                                    <p className={styles.all}>All</p>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                <p
                                    className={styles.unselected}
                                    onClick={unselectAll}
                                >
                                    Unselect all
                                </p>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="men"
                                        name="men"
                                        className="pe-2"
                                        checked={selectedItems.includes("men")}
                                        onChange={() => toggleSelection("men")}
                                    />
                                    <label
                                        for="men"
                                        className={`${styles.gender_type} ps-2`}
                                    >
                                        Men
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="women"
                                        name="women"
                                        className="pe-2"
                                        checked={selectedItems.includes(
                                            "women"
                                        )}
                                        onChange={() =>
                                            toggleSelection("women")
                                        }
                                    />
                                    <label
                                        for="women"
                                        className={`${styles.gender_type} ps-2`}
                                    >
                                        Women
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="baby"
                                        name="baby"
                                        className="pe-2"
                                        checked={selectedItems.includes("baby")}
                                        onChange={() => toggleSelection("baby")}
                                    />
                                    <label
                                        for="baby"
                                        className={`${styles.gender_type} ps-2`}
                                    >
                                        Baby & Kids
                                    </label>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    );
                })}
            </Accordion>
        </div>
    );
};

export default Filter;
