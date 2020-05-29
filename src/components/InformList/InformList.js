import React, { Component } from 'react';
import './App.css';




class InformList extends Component {
    render() {
        return (
        <div className = "Information">
                    
            <li>О НАС:</li>
                    <p>Наша компания начала свою деятельность на компьютерном рынке под 
                        торговой маркой ClickStore.kg в 2020 году. Наша специализация - 
                        это розничная мелкооптовая торговля комплектующими, смартфонами, компьютерами,
                        различной электроникой и техникой.</p> 
                    
                    <p>Информация на сайте ClickStore.kg обновляется каждый день и отображаются 
                        товары, которые есть в наличии (за исключением тех случаев, когда товар 
                        закончился сегодня и не успела обновиться информация на сайте).
                        Администрация делает все возможное чтобы донести до потребителя максимально 
                        точную информацию о товаре.</p> 
                
                    <p>Мы предлагаем своим клиентам широкий выбор качественных товаров по самым
                        привлекательным ценам. Являясь динамично развивающейся компанией, основные
                        усилия мы направляем на постоянное совершенствование обслуживания покупателей
                        и постоянное снижение издержек поставки товара к конечному потребителю, тем самым
                        делая товар еще доступней для потребителя.</p> 

                    <p>Наша компания ориентируется на корпоративных клиентов и на розничных покупателей.
                        Вы всегда сможете найти у нас как самые последние новинки электронного рынка, 
                        так и надежные решения выбора электронники и техники для корпоративного сектора.</p>

                    <p>Наша цель: помочь максимальному количеству людей сделать выбор среди огромного 
                        ассортимента электроники и техники с наилучшим сочетанием Цена -
                        Качество, получения удовольствия от приобретения товара и дальнейшее долгое и
                        приятное использование приобретенной продукции.</p>
                        
            <li>Наш адрес:</li>
            <p>город Бишкек, ул.Исанова 105/3</p>

            <ul className = "telephone-icons">
                <li>Контакты:
                    
                        <p>+996555555555 <a href="tel:+996555555555">
                            <img src="https://image.flaticon.com/icons/svg/1033/1033927.svg"/></a>
                            <a href="message:+996555555555">
                                <img src="https://image.flaticon.com/icons/svg/2052/2052763.svg"/></a>
                        </p>

                        <p>+996505555555 <a href="tel:+996505555555">
                            <img src="https://image.flaticon.com/icons/svg/1033/1033927.svg"/></a>
                            <a href="message:+996505555555">
                                <img src="https://image.flaticon.com/icons/svg/2052/2052763.svg"/></a>
                        </p>

                        <p>+996775555555  <a href="tel:+996775555555">
                            <img src="https://image.flaticon.com/icons/svg/1033/1033927.svg"/></a>
                            <a href="message:+996775555555">
                                <img src="https://image.flaticon.com/icons/svg/2052/2052763.svg"/></a>
                        </p>

                        <p>+996312312312  <a href="tel:+996312312312">
                            <img src="https://image.flaticon.com/icons/svg/684/684920.svg"/></a>
                        </p>

                </li>
            </ul>

            <ul className = "social-icons">
                    <li>
                        <a href="https://www.whatsapp.com">
                        <img src="https://image.flaticon.com/icons/svg/124/124034.svg"/></a>
                    </li>

                    <li>
                        <a href="http://www.viber.com">
                        <img src="https://www.flaticon.com/premium-icon/icons/svg/2504/2504948.svg"/></a>
                    </li>

                    <li>
                        <a href="https://telegram.org/">
                        <img src="https://image.flaticon.com/icons/svg/2111/2111646.svg"/></a>
                    </li>
            </ul>
            
            <ul className = "form-icons">
                <li onClick={this.props.handleModal}> Жалобы и предложения по сайту => <a><img src="https://image.flaticon.com/icons/svg/2649/2649449.svg"/></a></li>
            </ul>
         </div>   
        );
    }
}

export default InformList;