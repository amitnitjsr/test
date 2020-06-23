import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Image from '../images/Travel.jpg';
import Process from './Process';
import FAQ from './FAQ';
import './ClaimHome.css';


class ClaimHome extends Component {
    state = {
        process: true,
        faq: false,
        active1: 'active_button',
        active2: '',
        dropdownOpen: false,
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
        console.log('too')
        this.setState(
            { dropdownOpen: !this.state.dropdownOpen }
        )
    }
    render() {
        return (
            <div>
                <p>
                    <nav class="navbar">
                        <label class="navbar-toggle" id="js-navbar-toggle" for="chkToggle">
                            <i class="fa fa-bars"></i>
                        </label>
                        <label>Chola MS</label>
                        <input type="checkbox" id="chkToggle"></input>
                        <ul class="main-nav" id="js-menu">
                            <li>
                                <Dropdown isOpen={this.state.dropdownOpen} toggle={() => this.toggle()}>
                                    <DropdownToggle className="drop" caret >
                                        Products
                                     </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>Some Action</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Foo Action</DropdownItem>
                                        <DropdownItem>Bar Action</DropdownItem>
                                        <DropdownItem>Quo Action</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </li>
                            <li>
                                <Dropdown isOpen={this.state.dropdownOpen} toggle={() => this.toggle()}>
                                    <DropdownToggle className="drop" caret >
                                        Customer Services
                                     </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>Some Action</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Foo Action</DropdownItem>
                                        <DropdownItem>Bar Action</DropdownItem>
                                        <DropdownItem>Quo Action</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </li>
                            <li>
                                <Dropdown isOpen={this.state.dropdownOpen} toggle={() => this.toggle()}>
                                    <DropdownToggle className="drop" caret >
                                        Information Center
                                     </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>Some Action</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Foo Action</DropdownItem>
                                        <DropdownItem>Bar Action</DropdownItem>
                                        <DropdownItem>Quo Action</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </li>
                            <li>
                                <Dropdown isOpen={this.state.dropdownOpen} toggle={() => this.toggle()}>
                                    <DropdownToggle className="drop" caret >
                                        About Us
                                     </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>Some Action</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Foo Action</DropdownItem>
                                        <DropdownItem>Bar Action</DropdownItem>
                                        <DropdownItem>Quo Action</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </li>
                            <li>
                                <span>Customer Testimonials</span>
                            </li>
                        </ul>
                        <span><i className="zmdi zmdi-account-o zmdi-hc-lg"></i></span>
                    </nav>
                </p>
                {/* <div class="header">
                    <p style={{ fontSize: '10px', background: 'grey', textAlign: 'end' }}>
                        Header
                        <span>Test</span>
                    </p>
                    <p>
                        Chola@MS
                        <span>&nbsp;
                        Products
                        </span>
                    </p>
                </div> */}

                <div class="content">
                    <p>
                        <div>
                            <img src={Image} alt="Not found imagefile" width="100%" />
                            <div class="centered">Claims Process</div>
                        </div>
                    </p>
                </div>

                <div class="header1">
                    <span className="home">
                        Home
                    </span>&nbsp;
                    <span className="font_size" >
                        &gt;
                    </span>&nbsp;
                    <span style={{ fontSize: '15px' }}>Claims Process</span>
                    <p style={{ textAlign: 'center' }}>
                        <label className={`${'lb'} ${this.state.active1}`} onClick={() => { this.clickHandler('process') }}>Process</label> &nbsp;
                       <label className={`${'lb'} ${this.state.active2}`} onClick={() => { this.clickHandler('faq') }} >FAQ</label>
                    </p>
                </div>

                <div class="content">
                    {this.state.process ? <Process /> : <FAQ />
                    }
                </div>
            </div >
        )
    }
}
export default ClaimHome;