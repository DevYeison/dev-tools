import React from 'react';
import './App.css'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeContainer from './containers/HomeContainer/HomeContainer';
import PriceContainer from "../src/containers/PriceContainer/PriceContainer";
import Resources from "../src/containers/Resources/Resources";
import Contact from "../src/containers/Contact/Contact";
import ErrorContainer from "../src/containers/ErrorContainer/ErrorContainer";


import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";

function App() {
  const brandName = "Dev | Tools";
  const reactDocsUrl = "https://es.reactjs.org/";
  const githubProfileUrl = "https://github.com/devyeison";
  const currentYear = "2021";
  const routes = [
    {
      id: 1,
      title: "Cotización",
      route: "price",
    },
    {
      id: 2,
      title: "Recursos",
      route: "resources",
    },
    {
      id: 3,
      title: "Contacto",
      route: "contact",
    },
  ];

  return (
    <>
      <BrowserRouter>
        <Header brandName={brandName} topicList={routes} />
        <Switch>
          <Route exact path="/home" component={HomeContainer}></Route>
          <Route exact path="/price" component={PriceContainer}></Route>
          <Route exact path="/resources" component={Resources}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/">
            <Redirect to="/home"></Redirect>
          </Route>

          <Route path="*" component={ErrorContainer}></Route>
        </Switch>
      </BrowserRouter>
      <Footer currentYear={currentYear} GithubUrl={githubProfileUrl} ReactUrl={reactDocsUrl} />
    </>
  );

}

export default App;
