import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Collapse,
  NavbarToggler,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
  };

  const linkHoverStyle = {
    textDecoration: 'underline',
    color: 'white',
  };

  return (
    <Navbar color="dark" dark expand="md">
      <NavbarToggler onClick={toggleNavbar} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink
              href="/#"
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
            >
              <span className="brandName">Silicon Island Vallejo</span>
            </NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink
              href="/about"
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
            >
              Our Story
            </NavLink>
          </NavItem> */}
          {/* <NavItem>
            <NavLink
              href="/how-it-works"
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
            >
              How it Works
            </NavLink>
          </NavItem> */}
          {/* <NavItem>
            <NavLink
              href="/contact"
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
            >
              Start a Project
            </NavLink>
          </NavItem> */}

          {/* Pricing Dropdown */}
          {/* <NavItem>
            <Dropdown nav isOpen={dropdownOpen} toggle={toggleDropdown}>
              <DropdownToggle nav caret style={linkStyle}>
                Products 
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="/reviews">AI Reviews</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavItem> */}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default MyHeader;
