import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Image from '../../images/Travel.jpg';
import PhoneImg from '../../images/phone1.png';
import facebookImg from '../../images/facebook.png';
import twitterImg from '../../images/twitter.png';
import linkedImg from '../../images/linkedin.png';
import instagramImg from '../../images/instagram.png';
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
    toggleProduct = () => {
        console.log('too')
        this.setState(
            { dropdownOpen: !this.state.dropdownOpen }
        )
    }
    toggleCustomer = () => {
        this.setState({ customer: !this.state.customer })
    }
    toggleInformation = () => {
        this.setState({ information: !this.state.information })
    }
    toggleAbout = () => {
        this.setState({ about: !this.state.about })
    }
    render() {
        return (
            <div>
                {/* <section class="cms-siteheader-top">
                    <section class="container">
                        <section class="cms-shtop-inner">
                            <aside class="cms-contactnos clearfix">
                                <a class="cms-iconlink" href="tel:18002085544" title="1800-208-5544">1800-208-5544</a>
                                <ul class="clearfix">
                                    <li><a href="tel:18002085544" title="1800-208-5544">In India <strong>1800-208-5544</strong></a></li>
                                    <li><a href="tel:4430985300" title="+91-44-3098 5300">Outside India <strong>+91-44-6166 3400</strong></a></li>
                                </ul>
                            </aside>
                            <ul class="cms-socialmedia clearfix">
                                <li class="cms-sm1"><a href="https://www.facebook.com/CholaMSInsurance" rel="nofollow" title="Facebook" target="_blank">Facebook</a></li>
                                <li class="cms-sm2"><a href="https://twitter.com/cholaMS" rel="nofollow" title="Twitter" target="_blank">Twitter</a></li>
                                <li class="cms-sm3"><a href="https://in.linkedin.com/company/cholamandalam-ms-general-insurance-co--ltd-" rel="nofollow" title="Linkedin" target="_blank">Linkedin</a></li>
                                <li class="cms-sm4"><a href="https://instagram.com/chola_ms?igshid=ttrjfgb28hjt" rel="nofollow" title="Instagram" target="_blank">Instagram</a></li>
                            </ul>
                        </section>
                    </section>
                </section> */}

                <p>

                    <div class="header">

                        <p style={{ textAlign: 'end' }}>
                            <span>
                                <img src={PhoneImg} alt="not found" />
                            </span>&nbsp;
                            <span>In India
                                <a class="cms-iconlink" href="tel:18002085544" title="1800-208-5544">
                                    <strong>1800-208-5544</strong></a>
                            </span>&nbsp;
                            <span class="vl">

                            </span>&nbsp;
                            <span>
                                Outside India<a href="tel:4430985300" title="+91-44-3098 5300"> <strong>+91-44-6166 3400</strong></a>
                            </span>
                            <span>
                                <span >
                                    <span ><a href="https://www.facebook.com/CholaMSInsurance" rel="nofollow" title="Facebook" target="_blank">
                                        <img src={facebookImg} alt="not found" />
                                    </a></span>&nbsp;&nbsp;
                                    <span ><a href="https://twitter.com/cholaMS" rel="nofollow" title="Twitter" target="_blank">
                                        <img src={twitterImg} alt="not found" /></a></span>&nbsp;&nbsp;
                                    <span ><a href="https://in.linkedin.com/company/cholamandalam-ms-general-insurance-co--ltd-" rel="nofollow" title="Linkedin" target="_blank">
                                        <img src={linkedImg} alt="not found" /></a></span>&nbsp;&nbsp;
                                    <span ><a href="https://instagram.com/chola_ms?igshid=ttrjfgb28hjt" rel="nofollow" title="Instagram" target="_blank">
                                        <img src={instagramImg} alt="not found" /></a></span>&nbsp;&nbsp;&nbsp;
                                </span>

                            </span>
                        </p>


                    </div>

                    <nav class="navbar">

                        <label class="navbar-toggle" id="js-navbar-toggle" for="chkToggle">
                            <i class="fa fa-bars"></i>
                        </label>
                        <label>Chola MS</label>
                        <input type="checkbox" id="chkToggle"></input>
                        <ul class="main-nav" id="js-menu">
                            <li>
                                <Dropdown isOpen={this.state.dropdownOpen} toggle={() => this.toggleProduct()}>
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
                                <Dropdown isOpen={this.state.customer} toggle={() => this.toggleCustomer()}>
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
                                <Dropdown isOpen={this.state.information} toggle={() => this.toggleInformation()}>
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
                                <Dropdown isOpen={this.state.about} toggle={() => this.toggleAbout()}>
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
                                {/* <form action="/action_page.php">

                                    <select style={{ border: 'none' }} name="cars" id="cars">
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="opel">Opel</option>
                                        <option value="audi">Audi</option>
                                    </select>

                                </form> */}
                            </li>
                            <li style={{ margin: '5px', fontSize: '1rem', fontWeight: '400', cursor: 'pointer' }}>
                                <span>Customer Testimonials</span>
                            </li>
                        </ul>
                        <span><i className="zmdi zmdi-account-o zmdi-hc-lg"></i></span>
                    </nav>
                </p>


                <div class="content">
                    <p>
                        <div>
                            <img src={Image} alt="Not found imagefile" width="100%" />
                            <div class="centered">Claims Process</div>
                        </div>
                    </p>
                </div>

                <div class="container">
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