import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import './FAQ.css';


export default class FAQ extends Component {
    state = {
        block1: false,
        block2: false,
        block3: false,
        block4: false,
        block5: false,
    }

    toggle1 = (index) => {
        this.setState({ [`block${index}`]: !this.state[`block${index}`] });
    };
    toggle = () => {

        var coll = document.getElementsByClassName("collapsible");
        var i;
        for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function () {
                this.classList.toggle("active1");
                var content = this.nextElementSibling;
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            }
            );
        }
    }
    render() {
        return (
            <div className="faQ-content">
                <p className="par">We're here to help!</p>

                {/* search button */}
                <p>
                    <span>
                        <input type='text' placeholder='search...' />
                    </span>
                    &nbsp;
                    <span>
                        <button className="search-btn">SEARCH</button>
                    </span>
                </p>

                {/* tableRow Data */}

                <p>
                    <button className="collapsible" onClick={() => this.toggle1(1)}>
                        {this.state.block1 ?
                            <i className="zmdi zmdi-minus-circle-outline" style={{ margin: '5px' }}></i> :
                            <i className="zmdi zmdi-plus-circle-o" style={{ margin: '5px' }}></i>}
                        How can I add an alternate number to recieve SMS notification?.
                        </button>
                    <Collapse isOpen={this.state.block1}>
                        <div className="row-data" >
                            {/* <Card>
                                <CardBody> */}
                                    Anim pariatur cliche reprehenderit,
                                    enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                    anim keffiyeh helvetica, craft beer labore wes anderson cred
                                    nesciunt sapiente ea proident.
                            {/* </CardBody>
                            </Card> */}
                        </div>
                    </Collapse>
                </p>
                <p>
                    <button className="collapsible" onClick={() => this.toggle1(2)}>
                        {this.state.block2 ?
                            <i className="zmdi zmdi-minus-circle-outline" style={{ margin: '5px' }}></i> :
                            <i className="zmdi zmdi-plus-circle-o" style={{ margin: '5px' }}></i>}
                        How can I add an alternate number to recieve SMS notification?.
                        </button>
                    <Collapse isOpen={this.state.block2}>
                        <div className="row-data" >
                            {/* <Card>
                                <CardBody> */}
                                    Anim pariatur cliche reprehenderit,
                                    enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                    anim keffiyeh helvetica, craft beer labore wes anderson cred
                                    nesciunt sapiente ea proident.
                            {/* </CardBody>
                            </Card> */}
                        </div>
                    </Collapse>
                </p>
                <p>
                    <button className="collapsible" onClick={() => this.toggle1(3)}>
                        {this.state.block3 ?
                            <i className="zmdi zmdi-minus-circle-outline" style={{ margin: '5px' }}></i> :
                            <i className="zmdi zmdi-plus-circle-o" style={{ margin: '5px' }}></i>}
                        How can I add an alternate number to recieve SMS notification?.
                        </button>
                    <Collapse isOpen={this.state.block3}>
                        <div className="row-data" >
                            {/* <Card>
                                <CardBody> */}
                                    Anim pariatur cliche reprehenderit,
                                    enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                    anim keffiyeh helvetica, craft beer labore wes anderson cred
                                    nesciunt sapiente ea proident.
                            {/* </CardBody>
                            </Card> */}
                        </div>
                    </Collapse>
                </p>
                <p>
                    <button className="collapsible" onClick={() => this.toggle1(4)}>
                        {this.state.block4 ?
                            <i className="zmdi zmdi-minus-circle-outline" style={{ margin: '5px' }}></i> :
                            <i className="zmdi zmdi-plus-circle-o" style={{ margin: '5px' }}></i>}
                        How can I add an alternate number to recieve SMS notification?.
                        </button>
                    <Collapse isOpen={this.state.block4}>
                        <div className="row-data" >
                            {/* <Card>
                                <CardBody> */}
                                    Anim pariatur cliche reprehenderit,
                                    enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                    anim keffiyeh helvetica, craft beer labore wes anderson cred
                                    nesciunt sapiente ea proident.
                            {/* </CardBody>
                            </Card> */}
                        </div>
                    </Collapse>
                </p>
                <p>
                    <button className="collapsible" onClick={() => this.toggle1(5)}>
                        {this.state.block5 ?
                            <i className="zmdi zmdi-minus-circle-outline" style={{ margin: '5px' }}></i> :
                            <i className="zmdi zmdi-plus-circle-o" style={{ margin: '5px' }}></i>}
                        How can I add an alternate number to recieve SMS notification?.
                        </button>
                    <Collapse isOpen={this.state.block5}>
                        <div className="row-data" >
                            {/* <Card>
                                <CardBody> */}
                                    Anim pariatur cliche reprehenderit,
                                    enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                    anim keffiyeh helvetica, craft beer labore wes anderson cred
                                    nesciunt sapiente ea proident.
                            {/* </CardBody>
                            </Card> */}
                        </div>
                    </Collapse>
                </p>
            </div>
        )
    }
}
