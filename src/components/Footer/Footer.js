import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-wrapper">
                    <div className="footer-left">
                        <Link to="/"><span id="footer-logo">ClickStore</span></Link>
                        <span>© 2020 Все права защищены</span>
                    </div>
                    <div id="bottom" className="footer-right">
                        <ul className="social-list">
                            <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="facebook-icon"></i>facebook</a></li>
                            <li><a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><i className="twitter-icon"></i>twitter</a></li>
                            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="instagram-icon"></i>instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;