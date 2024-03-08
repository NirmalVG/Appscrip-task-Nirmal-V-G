"use client";
import React, { useState } from "react";
import Products from "../Products/Products";
import Filter from "../Filter/Filter";
import { Row, Col } from "react-bootstrap";
import FilterHead from "../FilterHead/FilterHead";
import { useStateManager } from "react-select";

const ProductList = ({ props }) => {
    const [show, setShow] = useState(true);
    const [selectedItems, setSelectedItems] = useState([]);
    const [mainItem, setMainItem] = useState("");
    const [filteredData, setFilteredData] = useState(props);

    const showFilter = () => {
        setShow(!show);
    };

    const handleFilter = (e) => {
        switch (e.value) {
            case "RECOMMENDED":
                setFilteredData(props);
                break;
            case "NEWEST FIRST":
                setFilteredData(props);
                break;
            case "POPULAR":
                const sortedProducts = [...props]?.sort(
                    (a, b) => b?.rating?.rate - a?.rating?.rate
                );
                setFilteredData(sortedProducts);
                break;
            case "PRICE:HIGH TO LOW":
                const priceHighToLowSortedProducts = [...props]?.sort(
                    (a, b) => b.price - a.price
                );
                setFilteredData(priceHighToLowSortedProducts);
                break;
            case "PRICE:LOW TO HIGH":
                const priceLowToHighSortedProducts = [...props]?.sort(
                    (a, b) => a.price - b.price
                );
                setFilteredData(priceLowToHighSortedProducts);
                break;
        }
    };

    const toggleSelection = (itemId) => {
        setMainItem(itemId);
        if (selectedItems.includes(itemId)) {
            setSelectedItems(selectedItems.filter((id) => id !== itemId));
        } else {
            setSelectedItems([...selectedItems, itemId]);
        }
    };

    const unselectAll = () => {
        setSelectedItems([]);
    };
    return (
        <>
            <FilterHead
                showFilter={showFilter}
                show={show}
                props={props}
                handleFilter={handleFilter}
            />
            <Row className="pe-5 ps-5">
                {show && (
                    <Col md={6} lg={3}>
                        <Filter
                            unselectAll={unselectAll}
                            selectedItems={selectedItems}
                            toggleSelection={toggleSelection}
                        />
                    </Col>
                )}
                <Col
                    md={show ? 9 : 12}
                    lg={show ? 9 : 12}
                >
                    <Products
                        mainItem={mainItem}
                        filteredData={filteredData}
                        props={props}
                        show={show}
                    />
                </Col>
            </Row>
        </>
    );
};

export default ProductList;
