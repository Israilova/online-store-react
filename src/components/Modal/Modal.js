import React, { Component } from 'react';
// импортируйте компоненты бутстрап которые вы используете

class Modal extends Component {

render() {
    return (
<div className="modal">
            <li>Спасибо что используете наш сайт!!!</li>
    <form class="decor">
        <div class="form-left-decoration"></div>
        <div class="form-right-decoration"></div>
        <div class="circle"></div>
        <div class="form-inner">
             <h3>Написать нам</h3>
             <input type="text" placeholder="Username"/>
             <input type="email" placeholder="Email"/>
             <textarea placeholder="Ваше сообщение..." rows="3"></textarea>
             <input type="submit" value="Отправить заявку"></input>
        </div>
    </form>
     </div>
        
          );
    }
}

export default Modal;