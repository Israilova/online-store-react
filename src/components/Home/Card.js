import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
// import { API_URL } from '../../helpers/url';
// import axios from 'axios';

class Card extends Component {

    state = {
        data:[],
        isAdd:false
        // model : '',
        // color: '',
        // memory: '',
        // price: '',
        // img: '',
        // type: '',
        // description:'' 
    }

    // handelClick = async () => {
    //     const data = {...this.props.data}
    //     // this.setState({ data })
    //     // console.log(data.id)
    //     // this.chosenItem()
    //     // await axios.post(`${API_URL}/chosen`, data)
    //     const newData =  await axios.get(`${API_URL}/chosen`,{
    //         params: {
    //             id:data.id
    //         }
    //     });
    //     if(!!newData.data.length){
    //         // data.status = !data.status
    //         // await axios.put(`${API_URL}/packages/${data.id}`, data)
    //         this.props.onChange()
    //         await axios.delete(`${API_URL}/chosen/${data.id}`)
    //     }
    //     // this.setState({status: !this.state.data.status})
    //     else {
    //         // data.status = !data.status
    //         // await axios.put(`${API_URL}/packages/${data.id}`, data)
    //         this.props.onChange()
    //         await axios.post(`${API_URL}/chosen`, data)
    //     }
    // }

    // chosenItem = async () => {
    //     await axios.post(`${API_URL}/chosen`, this.state.data)
    // }

    render() {
        // console.log(this.props)
        const styles = {
            li: {
                height: '200px',
                width: '200px',
                background: `url(${this.props.url}) no-repeat`,
                backgroundSize: 'cover',
                borderRadius: '5px'
            }
        }
        return (
            <li className="card">
                <div style={styles.li}></div>
                <div className="price">{this.props.price} KGS</div>
                <div className="model">{this.props.model}</div>
                <div className="btns">
                    <Link  to={`/packages/${this.props.id}`}>
                        <button className="details">Подробнее</button>
                    </Link>
                    {/* <button >Купить</button> */}
                    <div className={`add-icon ${this.props.status ? 'buy-icon' : ''}`} onClick={this.props.onChange}></div>
                </div>
            </li>
        );
    }
}

export default Card;