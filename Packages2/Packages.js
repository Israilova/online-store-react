import React, { Component } from 'react';
import './Show.css';

import axios from 'axios';
import { API_URL } from '../../helpers/url';

class Packages extends Component {

    constructor(props){
        super(props)
        this.state = {
            data:[]
        }
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async () => {
        const { data } = await axios({
            method:"GET",
            url:`${API_URL}/packages/${this.props.match.params.id}`
        });
        this.setState({ data });
    }

    render() {
        console.log(this.props)
        // const id = this.props.match.params.id;
        const data = this.state.data;
        return (
            // <div>
            //     <h2>This page id is {id}</h2>
            //     <h1>{data.model}</h1>
            // </div>

            <div className="show-model">

                    {/* {phone.map((item,index) =>( */}
                    <div className="container">
                        <div>
                        <h1>  {data.model}</h1>
                        </div>
                        <div className="main">
                        <div className="info">
                            <div className="first-block">
                            <img src={data.img} alt=""/>
                            <span>Память:  {data.memory}</span>
                            <span>Цвет:  {data.color}</span>
                            </div>
                            <div className="btn-social">
                                <button>
                                    <img src="https://seeklogo.net/wp-content/uploads/2015/11/twitter-logo.png" alt="" /> 
                                </button>
                                <button>
                                    <img src="https://seeklogo.net/wp-content/uploads/2016/06/Instagram-logo.png" alt="" />
                                    </button>
                                <button>
                                    <img src="https://seeklogo.net/wp-content/uploads/2013/02/youtube-button-vector.png" alt=""/>
                                    </button>
                                <button>
                                    <img src="https://seeklogo.net/wp-content/uploads/2015/09/google-plus-new-icon-logo.png" alt="" />
                                </button>
                            
                            </div>
                        </div>

                        <div className="contacts">
                            
                                <h2>Цена  {data.price} USD</h2>
                                <button>КУПИТЬ</button>
                                <span>ДОСТАВКА - БИШКЕК:</span>
                                <span>Курьером по городу Бишкек - 150 сом - 150 С</span>
                                <span>Срочная доставка Express 3 - 200 сом - 227 С</span>
                                <span>Самовывоз: г. Бишкек, ПВЗ в ТЦ "Берен Голд", ул. Усенбаева 106, 3 этаж, офисы 301 и 303</span>
                                <span>Оплата: Наличными - 100% предоплата</span>
                                <span>Гарантия: 2 недели</span>
                            <div/>
                            {/* <div className="reklama">
                                <img src="https://st4.depositphotos.com/13324256/28597/i/450/depositphotos_285970824-stock-photo-cropped-view-woman-holding-loudspeaker.jpg" />
                            </div> */}
                           
                        </div>
                        </div>
                    </div>
                    {/* ))} */}

            </div>
        );
    }
}

export default Packages;