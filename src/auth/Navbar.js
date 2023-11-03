import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AiOutlineUser, AiOutlineHeart } from 'react-icons/ai';
import { SlHandbag } from 'react-icons/sl'
import '../comman.scss';
import Modal from 'react-bootstrap/Modal';
import Login from "../auth/login.js"
import Signup from '../auth/signup'
import Slider from "../comman/slider.js"

function App() {
    const [searchValue, setSearchValue] = useState("");
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [test, setTest] = useState('')
    const [isLogin, setIsLogin] = useState(true);
    const [show, setShow] = useState(false);
    const [showLogin, setShowLogin] = useState(true);
    const [showSignup, setShowSignup] = useState(false);


    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

    const handleMenMouseEnter = (type) => {
        console.log('type', type)
        if (type) {
            setTest(type)
        }
        else {
            setTest('')
        }
        // setIsMenHovered(true);
    };

    // const handleMenMouseLeave = () => {
    //     setIsMenHovered(false);


    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };
    const navigateToWishlist = () => {
        window.location.href = '/wishlist';
    };

    const navigateToAddtocart = () => {
        window.location.href = '/addtocart';
        console.log("testttttt", navigateToAddtocart)
    };
    const navigateToLogin = () => {
        window.location.href = '/login';
        console.log("loginnnnnn", navigateToLogin)
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Modal show={show} onHide={handleClose} size="xl">
                {showLogin && <> <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                    <Login setShowLogin={setShowLogin} setShowSignup={setShowSignup}/></>}
                {showSignup && (
                    <Modal show={showSignup} onHide={handleClose} size="xl">
                        <Modal.Header closeButton>
                            <Modal.Title>Signup</Modal.Title>
                        </Modal.Header>
                        <Signup setShowLogin={setShowLogin} setShowSignup={setShowSignup}/>
                    </Modal>
                )}

            </Modal>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Dressify</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-between">
                    <Nav className="mr-auto">
                        <NavDropdown
                            title="MEN"
                            id="men-dropdown"
                            show={test === 'men'}
                            onMouseEnter={() => handleMenMouseEnter('men')}
                            onMouseLeave={() => handleMenMouseEnter('')}
                        >
                            <NavDropdown.Item href="#action/3.1">Shirts</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Trousers</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Accessories</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            title="WOMEN"
                            id="women-dropdown"
                            show={test === 'women'}
                            onMouseEnter={() => handleMenMouseEnter('women')}
                            onMouseLeave={() => handleMenMouseEnter('')}
                        >
                            <NavDropdown.Item href="#action/3.1">Shirts</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Trousers</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Accessories</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            title="KIDS"
                            id="kids-dropdown"
                            show={test === "kids"}
                            onMouseEnter={() => handleMenMouseEnter('kids')}
                            onMouseLeave={() => handleMenMouseEnter('')}
                        >
                            <NavDropdown.Item href="#action/3.1">Shirts</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Trousers</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Accessories</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            title="HOME & LIVING"
                            id="Home-dropdown"
                            show={test === "home"}
                            onMouseEnter={() => handleMenMouseEnter('home')}
                            onMouseLeave={() => handleMenMouseEnter('')}
                        >
                            <NavDropdown.Item href="#action/3.1">Flooring</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Lamps</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Curtains</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            title="BEAUTY"
                            id="Beauty-dropdown"
                            show={test === "beauty"}
                            onMouseEnter={() => handleMenMouseEnter('beauty')}
                            onMouseLeave={() => handleMenMouseEnter('')}
                        >
                            <NavDropdown.Item href="#action/3.1">Skincare</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Haircare</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Makeup</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex w-50">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            value={searchValue}
                            onChange={handleSearchChange}
                        />
                        {/* <Button variant="outline-success">Search</Button> */}
                    </Form>
                    <Nav className="d-flex gapNav">
                        <div className="d-flex flex-column align-items-center">
                            <div
                                className="dropdown-container"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className="nav-link">
                                    <div className="icon">
                                        <AiOutlineUser />
                                    </div>
                                    <div className="text">
                                        Profile
                                    </div>
                                </div>
                                {isDropdownVisible && (
                                    <div className="dropdown-content">
                                        <div className="content_text">
                                            <h2>Welcome</h2>
                                            <p>To access account and manage orders</p>
                                            <div className="profile_button">
                                                <button onClick={handleShow} className="login_btn">
                                                    <h2>Login / Signup</h2>
                                                </button>
                                            </div>
                                            <hr className="divider" />
                                            <ul >
                                                <li>Orders</li>
                                                <li>Gift cards</li>
                                                <li>Wishlist</li>
                                                <li>Contact us</li>
                                            </ul>
                                            <hr className="divider" />
                                            <ul>
                                                <li>Fashion Credits </li>
                                                <li>Coupons</li>
                                                <li>Saved cards</li>
                                                <li>Address</li>
                                            </ul>
                                        </div>

                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <div
                                className="dropdown-container"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className="nav-link">
                                    <div className="icon">
                                        <AiOutlineHeart />
                                    </div>
                                    <div className="text" onClick={navigateToWishlist}>
                                        Wishlist
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-column align-items-center">
                            <div
                                className="dropdown-container"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className="nav-link">
                                    <div className="icon">
                                        <SlHandbag />
                                    </div>
                                    <div className="text" onClick={navigateToAddtocart}>
                                        AddtoCart
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Nav>

                </Navbar.Collapse>

            </Navbar>
        </div>

    );
}

export default App;
