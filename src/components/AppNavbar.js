import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import {
    FaHome,
    FaHashtag,
    FaUserSecret,
    FaIdBadge,
    FaSignOutAlt
} from 'react-icons/fa'

const AppNavbar = props => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar style={{ backgroundColor: "#000" }} dark expand="md">
            <NavbarBrand href="/">SocialMedia</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="navbar-nav mr-auto">
              <NavItem>
                  <NavLink href="/home"><FaHome />Home</NavLink>
              </NavItem>

              <NavItem>
                  <NavLink href="/explore"><FaHashtag />Explore</NavLink>
              </NavItem>

              {props.state.showAdminBoard && (
                <NavItem>
                    <NavLink href="/admin">Admin Board</NavLink>
                </NavItem>
              )}

              {props.state.currentUser && (
                <NavItem>
                    <NavLink href="/user"><FaUserSecret />User</NavLink>
                </NavItem>
              )}
                </Nav>

            {props.state.currentUser ? (
                <Nav navbar>
                    <NavItem>
                        <NavLink href="/profile"><FaIdBadge />{props.state.currentUser.username}</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/login" onClick={props.logOut}>
                            <FaSignOutAlt />LogOut
                        </NavLink>
                    </NavItem>
                </Nav>
            ) : (
                <Nav navbar>
                    <NavItem>
                        <NavLink href="/login">Login</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink href="/register">Sign Up</NavLink>
                    </NavItem>
                </Nav>
            )}
            </Collapse>
          </Navbar>
    );
}

export default AppNavbar;