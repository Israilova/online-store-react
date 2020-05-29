import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../helpers/url';
import './MyOrders.css'

class MyOrders extends Component {

    state = {
        data: []
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async () => {
        const { data } = await axios({
            method:"GET",
            url:`${API_URL}/orders`
        });
        this.setState({ data });
    }

    handleTotal = () => {
        const arr = []
        this.state.data[0].data.map(item => arr.push(Number(item.price*item.quantity)))
        let sum = 0;
        if (arr.length) {
            sum = arr.reduce((a, b) => {
                return a + b
            });
        } else {
            sum = 0;
        }
        return sum;
    }

    render() {
        console.log(this.state.data)
        return (
            <>
                {this.state.data.length ? (
                    <div className="orders">
                        <table className="order-border">
                            <thead>
                                <tr>
                                    <th>№</th>
                                    <th>Получатель</th>
                                    <th>Адрес</th>
                                    <th>Телефон</th>
                                    <th>Товары</th>
                                    <th>Статус</th>
                                    {/* <th>К оплате</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.data.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.address}</td>
                                        <td>{item.phoneNumber}</td>
                                        <td>
                                            {item.data.map(item => (
                                                <div key={item.id} className="order-item">
                                                    {item.model} - {item.quantity}шт.
                                                </div>
                                            ))}
                                        </td>
                                        <td>Отправлен</td>
                                        {/* <td>
                                            <div><strong>{this.handleTotal()} с.</strong></div>
                                            <div><strong>{(this.handleTotal()/81).toFixed(1)} $</strong></div>
                                        </td> */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : <div className="empty-order"><h2>Ваш список заказов пуст!</h2></div>}
            </>
        );
    }
}

export default MyOrders;