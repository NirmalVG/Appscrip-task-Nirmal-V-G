"use client";
import React from "react";
import { Navbar, Container, Nav, Row, Col, NavDropdown } from "react-bootstrap";
import logoImg from "../../../../../public/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { useDimension } from "@/logic/useDimension";

const Header = () => {
  const { width } = useDimension();
  return (
    <div>
      <Navbar expand="lg" className={`bg-white`}>
        <Container
          fluid
          className={`${width >= 992 && "pe-5 ps-5"} position-relative`}
        >
          <Navbar.Brand>
            <Link href="/">
              <Image src={logoImg} height={50} width={50} alt="logo" />
            </Link>
          </Navbar.Brand>
          <div className={styles.logo_head}>
            <h2 className={`${styles.header_name}`}>LOGO</h2>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {width >= 992 && (
              <Nav className="ms-auto">
                <Nav.Link>
                  <CiSearch size={30} />
                </Nav.Link>
                <Nav.Link>
                  <CiHeart size={30} />
                </Nav.Link>
                <Nav.Link>
                  <IoBagHandleOutline size={30} />
                </Nav.Link>
                <Nav.Link>
                  <IoPersonOutline size={30} />
                </Nav.Link>
              </Nav>
            )}
            {width <= 992 && (
              <Nav>
                <Nav.Item>
                  <Nav.Link className={styles.header_link}>SHOP</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className={styles.header_link}>SKILLS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className={styles.header_link}>STORIES</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className={styles.header_link}>ABOUT</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className={styles.header_link}>CONTACT US</Nav.Link>
                </Nav.Item>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {width >= 992 && (
        <Nav className="d-flex justify-content-center">
          <Nav.Item>
            <Nav.Link className={styles.header_link}>SHOP</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={styles.header_link}>SKILLS</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={styles.header_link}>STORIES</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={styles.header_link}>ABOUT</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={styles.header_link}>CONTACT US</Nav.Link>
          </Nav.Item>
        </Nav>
      )}
      <hr />
    </div>
  );
};

export default Header;
