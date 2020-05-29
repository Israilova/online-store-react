import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../helpers/url';

class Header extends Component {
    
    state = {
        quantity:'',
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async () => {
        const { data } = await axios.get(`${API_URL}/packages`, {
            params: {
                status: true
            }
        })
        // if(this.state.quantity === data.length) return;
        this.setState({ quantity:data.length })
    }

    render() {
        return (
        // <React.Fragment>
            <div className="header">
                <div className="header__wrapper">
                    <div id="top" className="header__logo">
                        <Link to="/"><h1>ClickStore</h1></Link>
                    </div>
                    <ul className="header__menu">
                        <li className="header__menu-item"><Link to="/">Главная</Link></li>
                        <li className="header__menu-item"><Link handleModal={this.handleModal} to="/about">О компании</Link></li>
                        <li className="header__menu-item"><Link to="/delivery">Доставка</Link></li>
                        <li className="header__menu-item"><Link to="/credit">Кредит</Link></li>
                        <li className="header__menu-item"><Link to="/orders">Мои заказы</Link></li>
                        <li className="quantity">{this.state.quantity ? this.state.quantity : ' '}</li>
                        <li className="header__menu-item">
                            <Link to="/basket"><i className="basket-icon"></i></Link>
                        </li>
                    </ul>
                </div>
            </div>
        // </React.Fragment>
        );
    }
}

export default Header;