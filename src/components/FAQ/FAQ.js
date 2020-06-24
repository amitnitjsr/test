import React, { Component } from 'react';
import './FAQ.css';

export default class FAQ extends Component {

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
                    <p>
                        <button class="collapsible" onClick={() => this.toggle()}>
                            How can I add an alternate number to recieve SMS notification?.
                    </button>
                        <div class="content1">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </p>

                    <p>
                        <button class="collapsible" onClick={() => this.toggle()}>
                            How can I add an alternate number to recieve SMS notification?.
                    </button>
                        <div class="content1">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </p>
                    <p>
                        <button class="collapsible" onClick={() => this.toggle()}>
                            How can I add an alternate number to recieve SMS notification?.
                    </button>
                        <div class="content1">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </p>
                    <p>
                        <button class="collapsible" onClick={() => this.toggle()}>
                            How can I add an alternate number to recieve SMS notification?.
                    </button>
                        <div class="content1">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </p>
                    <p>
                        <button class="collapsible" onClick={() => this.toggle()}>
                            How can I add an alternate number to recieve SMS notification?.
                    </button>
                        <div class="content1">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </p>
                    <p>
                        <button class="collapsible" onClick={() => this.toggle()}>
                            How can I add an alternate number to recieve SMS notification?.
                    </button>
                        <div class="content1">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </p>
                </p>

            </div>
        )
    }
}
