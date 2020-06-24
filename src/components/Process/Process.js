import React, { Component } from 'react';
import Callback from '../../images/callback1.png';
import HealthImg from '../../images/health.PNG';
import './Process.css';

export default class Process extends Component {
    render() {
        return (
            <div className="process-content" >
                <p>
                    <div class="btn-group">
                        <button>Cashless</button>
                        <button>Reimbursement</button>
                    </div>
                </p>
                <p>
                    <img className="img" src={HealthImg} alt="not found" />
                </p>
                <p>
                    <span>
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

                <p>
                    Step 1
                </p>
                <p>
                    Locate a network hospital
                     </p>
                <ul className="demo">
                    <li >Who performs it? Plicy Holder</li>
                    <li >Locate a network hospital <a href="#">here</a></li>
                </ul>
                <hr />
                <p>
                    <span className="img1"> <img src={Callback} alt="not found" /> </span>
                    We will keep you update on the status of your claim via SMS and email. You can also track
                    ongoing claims <a href="#">here</a>
                </p>
            </div>
        )
    }
}
