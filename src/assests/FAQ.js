import React, { Component } from 'react';
import './FAQ.css';

export default class FAQ extends Component {
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <p className="par">We're here to help!</p>
                <p><input type='text' placeholder='search...' />&nbsp;
                <button className="search-btn">SEARCH</button></p>
                <p>

                </p>
            </div>
        )
    }
}
