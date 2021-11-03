import logo from './logo.svg';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Wallet} from './components/Wallet';
import { WalletInspector } from './components/WalletInspector';
import Destination from './components/Destination';


const App = () => {

  return (
    <Router>
      <div className ='container'>
        <div>
          <Wallet />
        </div>
        <Route
          path="/"
          exact
          render = {() => (
            <div className="Home">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
          )}
        />
        <Route path='/destination' component={Destination} />
      </div>
    </Router>
    
  );
}

export default App;
