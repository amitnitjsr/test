import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText, Card
} from 'reactstrap';

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarToggler onClick={toggle} />
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                {isOpen && <NavbarBrand href="/">reactstrap1</NavbarBrand>}
                <Collapse isOpen={isOpen} navbar>

                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu >
                                <DropdownItem>
                                    Option 1
                             </DropdownItem>
                                <DropdownItem>
                                    Option 2
                             </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                            </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    {/* <NavbarText>Simple Text</NavbarText> */}

                </Collapse>

                {!isOpen && <NavbarBrand href="/">reactstrap1</NavbarBrand>}
            </Navbar>
        </div>
    );
}

export default Example;