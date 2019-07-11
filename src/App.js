import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import HomePage from './views/homepage/homepage.component';
import ShopPage from './views/shop/shop.component';
import ContactPage from './views/contact/contact.component';
import SignInPage from './views/sign-in/sign-in.component';
import Header from './components/header/header.component';
import {auth} from './firebase/firebase.utils';
import {createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });
      }

      this.setState({currentUser: userAuth});
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/contact' component={ContactPage}/>
          <Route exact path='/signin' component={SignInPage}/>
        </Switch>
      </div>
    );
  }
} 


export default App;
