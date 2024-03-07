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

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-white">
        <Container fluid className="pe-5 ps-5">
          <Navbar.Brand>
            <Link href="/">
              <Image src={logoImg} height={30} width={30} alt="logo" />
            </Link>
          </Navbar.Brand>
          <h2 className={`${styles.header_name} justify-content-between`}>
            Logo
          </h2>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <CiSearch />
              </Nav.Link>
              <Nav.Link>
                <CiHeart />
              </Nav.Link>
              <Nav.Link>
                <IoBagHandleOutline />
              </Nav.Link>
              <Nav.Link>
                <IoPersonOutline />
              </Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Nav className="flex justify-content-center">
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
    </div>
  );
};

export default Header;
