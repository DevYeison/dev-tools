import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../src/containers/Home/Home';
import Price from "../src/containers/Price/Price";
import Resources from "../src/containers/Resources/Resources";
import Contact from "../src/containers/Contact/Contact";
import Error from "../src/containers/Error/Error";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/price" component={Price}></Route>
        <Route exact path="/resources" component={Resources}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/">
          <Redirect to="/home"></Redirect>
        </Route>
        <Route path="*" component={Error}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
