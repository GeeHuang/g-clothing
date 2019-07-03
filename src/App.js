import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import HomePage from './views/homepage/homepage.component';
import ShopPage from './views/shop/shop.component';
import ContactPage from './views/contact/contact.component';
import SignInPage from './views/sign-in/sign-in.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/contact' component={ContactPage}/>
        <Route exact path='/signin' component={SignInPage}/>
      </Switch>
    </div>
  );
}

export default App;
