import React, { Component } from 'react';
import Callback from '../../images/callback1.png';
import HealthImg from '../../images/health7.PNG';
import './Process.css';

export default class Process extends Component {
    state = {
        active1: true,
        active2: false,
        active3: false,
        active4: false,
        active5: false,
        active6: false,
        active7: false,
        step: 1,
    }
    stepHandler = (index) => {
        this.setState(
            {
                active1: false, active2: false, active3: false,
                active4: false, active5: false, active6: false, active7: false, step: index
            }
        )
        this.setState({ [`active${index}`]: true });
    }
    render() {
        return (
            <div className="process-content" >
                <div>
                    <div className="btn-group">
                        <div className="d">
                            <button className="b1">Cashless</button>
                            <button className="b2" style={{ color: 'grey' }} >Reimbursement</button>
                        </div>
                    </div>
                </div><br />
                <div>
                    <img className="img" src={HealthImg} alt="not found" />
                </div><br /><br />
                <div>
                    <span style={{ fontSize: '20px', color: '#040480', fontWeight: '800' }}>
                        Process Steps
                    </span><br /><br /><br />
                    <span>
                        <ul style={{ cursor: 'pointer' }}>
                            <li className={`li ${this.state.active1 ? 'active' : ''}`}
                                onClick={() => this.stepHandler(1)}>1</li>
                            <li className={`li ${this.state.active2 ? 'active' : ''}`}
                                onClick={() => this.stepHandler(2)}>2</li>
                            <li className={`li ${this.state.active3 ? 'active' : ''}`}
                                onClick={() => this.stepHandler(3)}>3</li>
                            <li className={`li ${this.state.active4 ? 'active' : ''}`}
                                onClick={() => this.stepHandler(4)}>4</li>
                            <li className={`li ${this.state.active5 ? 'active' : ''}`}
                                onClick={() => this.stepHandler(5)}>5</li>
                            <li className={`li ${this.state.active6 ? 'active' : ''}`}
                                onClick={() => this.stepHandler(6)}>6</li>
                            <li className={`li ${this.state.active7 ? 'active' : ''}`}
                                onClick={() => this.stepHandler(7)}>7</li>
                        </ul>
                    </span>
                </div><br />

                <div style={{ color: 'lightgrey', fontWeight: 'bold' }}>
                    Step {this.state.step}
                </div><br />
                <div style={{ fontWeight: '600', fontSize: '20px', color: '#040480' }}>
                    Locate a network hospital
                     </div><br />
                <ul className="demo" >
                    <li style={{ listStyleType: 'disc' }} >Who performs it? Policy Holder</li>
                    <li style={{ listStyleType: 'disc' }} >Locate a network hospital
                    <a href="http://localhost:3000/" style={{ color: '#007bff' }}> here</a></li>
                </ul><br />
                <hr /><br />
                <div>
                    <span className="img1"> <img src={Callback} alt="not found" /> </span>
                    We will keep you update on the status of your claim via SMS and email. You can also track
                    ongoing claims <a href="http://localhost:3000" style={{ color: '#007bff' }} >here</a>
                </div><br />
            </div >
        )
    }
}
