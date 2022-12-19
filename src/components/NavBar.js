import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Routes, Route } from "react-router-dom";
import { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Profile from '../pages/Profile';
import Home from '../pages/Home';
import ChangePassword from '../pages/ChangePassword';
import ChangeEmail from '../pages/ChangeEmail';
import AuthContext from '../Store/auth-context';


const NavBar = () => {
    const authCtx = useContext(AuthContext);

    const logoutHandler = () => {
        authCtx.logout()
    };

    const isLoggedIn = authCtx.isLoggedIn;

    return ( 
        <div>
            <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
                <Container>
                    <Navbar.Brand href="/">DBS</Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {!isLoggedIn && 
                        <Nav.Link href="/login">Login</Nav.Link>
                        }
                        <Nav.Link href="/register">Create Account</Nav.Link>
                    </Nav>
                    <Nav>
                        {isLoggedIn && 
                        <Nav.Link href="/profile">Change Email or Password</Nav.Link>
                        }
                        <Nav.Link href="/login" onClick={logoutHandler}>
                        Log Out
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>




            <div className="container mt-3">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/ChangePassword" element={<ChangePassword />} />
                    <Route path="/ChangeEmail" element={<ChangeEmail />} />
                    <Route path="/" element={<Home />}>
                    </Route>
                </Routes>
            </div>
        </div>
        );
    }
 
export default NavBar;