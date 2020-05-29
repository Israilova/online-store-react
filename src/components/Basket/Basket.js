import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../helpers/url';
import './Basket.css'

class Basket extends Component {

    state = {
        data: [],
        name:'',
        phoneNumber:'',
        address:'',
        email:''
    }

    componentDidMount(){
        this.fetchData();
        this.handleTotal();
    }

    fetchData = async () => {
        const { data } = await axios.get(`${API_URL}/packages`, {
            params: {
                status: true
            }
        })
        this.setState({ data })
    }

    handleTotal = () => {
        const arr = []
        this.state.data.map(item => arr.push(Number(item.price*item.quantity)))
        let sum = 0;
        if (arr.length) {
            sum = arr.reduce((a, b) => {
                // return (parseFloat(a) || 0) + (parseFloat(b) || 0);
                return a + b
            });
        } else {
            sum = 0;
        }
        return sum;
    }

    handleClear = () => {
        const data = [...this.state.data]
        data.forEach(item => {
            item.status = !item.status;
            item.quantity = 1;
        })
        data.forEach( async (item) => {
            await axios.put(`${API_URL}/packages/${item.id}`,item)
        })
        // this.setState({ data: [] })
        this.fetchData();
    }

    handleDelete = async (index) => {
        const deleteItem = {...this.state.data[index]}
        deleteItem.status = !deleteItem.status;
        deleteItem.quantity = 1;
        await axios.put(`${API_URL}/packages/${deleteItem.id}`, deleteItem);
        this.fetchData();
    }

    handleInputVal = async (e,item,index) => {
        // const data = [...this.state.data]
        // data[index].quantity = e.target.value;
        // this.setState({ data })
        // console.log(data[index])

        item.quantity = e.target.value
        if(item.quantity < 1 || item.quantity > 10) return
        await axios.put(`${API_URL}/packages/${item.id}`,item)
        this.fetchData();

    }

    handleInputName = (e) => {
        this.setState({ name: e.target.value })
    }

    handleInputPhoneNumber = (e) => {
        this.setState({ phoneNumber: e.target.value })
    }

    handleInputAddress = (e) => {
        this.setState({ address: e.target.value })
    }

    handleInputEmail = (e) => {
        this.setState({ email: e.target.value })
    }

    handleClick = async (e) => {
        e.preventDefault()
        if(!this.state.name || !this.state.phoneNumber || !this.state.address) return
        const data = {...this.state};
        // const product =  data.data.map(item => item.id)
        // data.product = product
        // delete data.data
        // console.log(product)
        await axios.post(`${API_URL}/orders/`, data)
        this.handleClear();
        this.fetchData();
        this.setState({
            name:'',
            phoneNumber:'',
            address:'',
            email:''
        })
    }

    render() {
        // console.log(this.state)
        return (
            <>
                {this.state.data.length ? (
                    <div className="basket-component">
                        <div className="table-wrapper">
                            <table id="table">
                                <thead>
                                    <tr>
                                        <th>Наименование</th>
                                        <th></th>
                                        <th>Кол-во</th>
                                        <th>Цена</th>
                                        <th>Сумма</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.data.map((item, index) => (
                                        <tr key={item.id}>
                                            <td>{item.model}</td>
                                            <td><img src={item.img} className="basket-item-img"/></td>
                                            <td>
                                                <input
                                                    className="input-quantity"
                                                    value={item.quantity}
                                                    onChange={(e) => this.handleInputVal(e,item,index)}
                                                    type="number"
                                                />
                                            </td>
                                            <td>{item.price} с.</td>
                                            <td>{item.price*item.quantity} с. </td>
                                            <td><i className="basket-delete" onClick={() => this.handleDelete(index)}></i></td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td><button onClick={this.handleClear}>Очистить корзину</button></td>
                                        <td></td>
                                        <td><strong>К оплате:</strong></td>
                                        <td><strong>{this.handleTotal()} с.</strong></td>
                                        <td id="total-td">или &nbsp;<strong>{(this.handleTotal()/81).toFixed(1)} $</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <form className="basket-form">
                            <div>
                                <label>Имя*</label>
                                <input
                                    value={this.state.name}
                                    onChange={(e) => this.handleInputName(e)}
                                />
                            </div>
                            <div>
                                <label>Адрес*</label>
                                <input
                                    value={this.state.address}
                                    onChange={(e) => this.handleInputAddress(e)}
                                    type="email"
                                />
                            </div>
                            <div>
                                <label>Телефон*</label>
                                <input
                                    value={this.state.phoneNumber}
                                    onChange={(e) => this.handleInputPhoneNumber(e)}
                                    type="number"
                                />
                            </div>
                            <div>
                                <label>Email</label>
                                <input
                                    value={this.state.email}
                                    onChange={(e) => this.handleInputEmail(e)}
                                />
                            </div>
                            <button onClick={(e) => this.handleClick(e)}>Оформить заказ</button>
                        </form>
                    </div>
                ) : <div className="basket-component">
                     <h2>Ваша корзина пуста</h2>
                    </div>}
            </>
        );
    }
}

export default Basket;