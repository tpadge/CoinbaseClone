import React from "react";
import NavbarContainer from './navbar/navbar_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { Link, Route, Switch} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import Splash from './splash/splash';
import CoinShow from './coins/coin_show';
import CoinIndex from './coins/coin_index';
import WatchList from './watchlist/watchilst';


const App = () => (
  <div>
    <header>
    <NavbarContainer/>
    </header>

  <Switch>
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <Route exact path="/" component={Splash} />
    <ProtectedRoute exact path="/coins" component={CoinIndex} />
    <ProtectedRoute path= "/coins/:id" component={CoinShow} />
    <ProtectedRoute path= "/watchlist" component={WatchList} />
  </Switch>
  </div>

);

export default App;