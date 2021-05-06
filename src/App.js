import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Cart from "./component/Cart";
import SingleItem from "./component/SingleItem";
import Evaly from './Evaly'
import {connect} from "react-redux"

const App = ({ current }) => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Evaly} />
          <Route exact path="/cart" component={Cart} />
          {!current ? (
            <Redirect to="/" />
          ) : (
            <Route exact path="/product/:id" component={SingleItem} />
          )}
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);


