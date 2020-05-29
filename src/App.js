import React, { Component } from 'react';
import './App.css'

import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { Switcher, routes } from './routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="section">
          <Header />
          <div className="main-bg"></div>
          <div className="anchor">
            <a href="#top">go</a>
          </div>

          <Switcher routes={routes}/>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;