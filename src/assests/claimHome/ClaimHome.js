import React, { Component } from 'react';
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
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
} from 'reactstrap';
import Image from '../../images/home.PNG';
import PhoneImg from '../../images/phone1.png';
import facebookImg from '../../images/facebook.png';
import twitterImg from '../../images/twitter.png';
import linkedImg from '../../images/linkedin.png';
import instagramImg from '../../images/instagram.png';
import logo from '../../images/logo.png';
import Process from '../../components/Process/Process';
import FAQ from '../../components/FAQ/FAQ';
import './ClaimHome.css';


class ClaimHome extends Component {
    state = {
        process: true,
        faq: false,
        active1: 'active_button',
        active2: '',
        dropdownOpen: false,
        product: false,
        customer: false,
        information: false,
        about: false,
        isOpen: false,
    }

    clickHandler = (value) => {
        if (value === 'process') {
            this.setState(
                { faq: false, process: true, active1: 'active_button', active2: '' }
            )
        }
        else {
            this.setState(
                { faq: true, process: false, active1: '', active2: 'active_button' }
            )
        }
    }

    toggle = () => {
        this.setState(
            { isOpen: !this.state.isOpen }
        )
    }

    render() {
        return (
            <div>
                {/* Top header */}
                <div className="header">
                    <p className="top-header" >
                        <span className="call-icon">
                            <img src={PhoneImg} alt="not found" />
                        </span>&nbsp;

                            {/* Number span  */}
                        <span className="numberspan">
                            <span>In India
                                <a className="cms-iconlink" href="tel:18002085544" title="1800-208-5544">
                                    <strong>1800-208-5544</strong></a>
                            </span>&nbsp;
                            <span class="vl">
                            </span>&nbsp;
                            <span>
                                Outside India<a href="tel:4430985300" title="+91-44-3098 5300"> <strong>+91-44-6166 3400</strong></a>
                            </span>
                        </span>

                        {/* Social Icon in top header */}
                        <span className="social-icon">
                            <span >
                                <span ><a href="https://www.facebook.com/CholaMSInsurance" rel="noopener noreferrer" title="Facebook" target="_blank">
                                    <img src={facebookImg} alt="not found" />
                                </a></span>&nbsp;&nbsp;
                                    <span ><a href="https://twitter.com/cholaMS" rel="noopener noreferrer" title="Twitter" target="_blank">
                                    <img src={twitterImg} alt="not found" /></a></span>&nbsp;&nbsp;
                                    <span ><a href="https://in.linkedin.com/company/cholamandalam-ms-general-insurance-co--ltd-" rel="noopener noreferrer" title="Linkedin" target="_blank">
                                    <img src={linkedImg} alt="not found" /></a></span>&nbsp;&nbsp;
                                    <span ><a href="https://instagram.com/chola_ms?igshid=ttrjfgb28hjt" rel="noopener noreferrer" title="Instagram" target="_blank">
                                    <img src={instagramImg} alt="not found" /></a></span>&nbsp;&nbsp;&nbsp;
                                </span>
                        </span>
                    </p>
                </div>

                <Navbar color="light" light expand="md">
                    <NavbarToggler onClick={() => this.toggle()} />
                    <NavbarBrand href="/"><img src={logo} alt="not found" /></NavbarBrand>
                    {this.state.isOpen && <NavbarBrand href="/"><i className="zmdi zmdi-account-o zmdi-hc-lg"></i></NavbarBrand>}

                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Products
                                </DropdownToggle>
                                <DropdownMenu >
                                    <DropdownItem>
                                        Option 1
                                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>
                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Customer Services
                                </DropdownToggle>
                                <DropdownMenu >
                                    <DropdownItem>
                                        Option 1
                                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                     </DropdownItem>
                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Information Center
                                </DropdownToggle>
                                <DropdownMenu >
                                    <DropdownItem>
                                        Option 1
                                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>
                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    About Us
                                </DropdownToggle>
                                <DropdownMenu >
                                    <DropdownItem>
                                        Option 1
                                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>
                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">Customer Testimonials</NavLink>
                            </NavItem>
                        </Nav>
                        {/* <NavbarText>Simple Text</NavbarText> */}

                    </Collapse>

                    {!this.state.isOpen && <NavbarBrand href="/"><i className="zmdi zmdi-account-o zmdi-hc-lg"></i></NavbarBrand>}
                </Navbar>

                {/* claim process img */}
                <div >
                    <p>
                        <div >
                            <img className="img-home" src={Image} alt="Not found imagefile" />
                            <div className="centered">Claims Process</div>
                        </div>
                    </p>
                </div>

                {/* down header bar, process and FAQ */}
                <div className="header2">
                    <span className="home">
                        Home
                    </span>&nbsp;
                    <span className="font_size" >
                        &gt;
                    </span>&nbsp;
                    <span style={{ fontSize: '15px' }}>Claims Process</span>
                    <p style={{ textAlign: 'center' }}>
                        <label className={`${'lb'} ${this.state.active1}`}
                            onClick={() => { this.clickHandler('process') }}>Process</label> &nbsp;
                       <label className={`${'lb'} ${this.state.active2}`}
                            onClick={() => { this.clickHandler('faq') }} >FAQ</label>
                    </p>
                </div>

                <div className="content">
                    {this.state.process ? <Process /> : <FAQ />
                    }
                </div>
            </div >
        )
    }
}

export default ClaimHome;