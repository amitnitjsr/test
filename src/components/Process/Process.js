import React, { Component } from 'react';
import Callback from '../../images/callback1.png';
import HealthImg from '../../images/health.PNG';
import './Process.css';

export default class Process extends Component {
    render() {
        return (
            <div className="process-content" >
                <p>
                    <div className="btn-group">
                        <button >Cashless</button>
                        <button >Reimbursement</button>
                    </div>
                </p>
                <p>
                    <img className="img" src={HealthImg} alt="not found" />
                </p>
                <p>
                    <span style={{ fontSize: '20px', color: '#040480', fontWeight: '800' }}>
                        Process Steps
                    </span><br /><br />
                    <span>
                        <ul>
                            <li className="li active">1</li>
                            <li className="li">2</li>
                            <li className="li">3</li>
                            <li className="li">4</li>
                            <li className="li">5</li>
                            <li className="li">6</li>
                            <li className="li">7</li>
                        </ul>
                    </span>
                </p>

                <p style={{ color: 'lightgrey', fontWeight: 'bold' }}>
                    Step 1
                </p>
                <p style={{ fontWeight: '600', fontSize: '20px', color: '#040480' }}>
                    Locate a network hospital
                     </p>
                <ul className="demo" >
                    <li style={{ listStyleType: 'disc' }} >Who performs it? Policy Holder</li>
                    <li style={{ listStyleType: 'disc' }} >Locate a network hospital <a href="http://localhost:3000/">here</a></li>
                </ul>
                <hr />
                <p>
                    <span className="img1"> <img src={Callback} alt="not found" /> </span>
                    We will keep you update on the status of your claim via SMS and email. You can also track
                    ongoing claims <a href="http://localhost:3000"  >here</a>
                </p>
            </div >
        )
    }
}
