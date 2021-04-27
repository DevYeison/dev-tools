import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HttpsRedirect from "react-https-redirect";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeContainer from "./containers//HomeContainer";
import PriceContainer from "../src/containers//PriceContainer";
import ResourcesContainer from "../src/containers//ResourcesContainer";
import Contact from "../src/containers//ContactContainer";
import NotFoundErrorContainer from "../src/containers/NotFoundErrorContainer";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  const brandName = "Dev | Tools";
  const reactDocsUrl = "https://es.reactjs.org/";
  const githubProfileUrl = "https://github.com/devyeison";
  const currentYear = "2021";
  const routes = [
    {
      id: 1,
      title: "Cotización",
      route: "/price",
    },
    {
      id: 2,
      title: "Recursos",
      route: "/resources",
    },
    {
      id: 3,
      title: "Contacto",
      route: "/contact",
    },
  ];

  return (
    <HttpsRedirect>
      <BrowserRouter>
        <ScrollToTop />
        <Header brandName={brandName} topicList={routes} />
        <Switch>
          <Route exact path="/home" component={HomeContainer}></Route>
          <Route exact path="/price" component={PriceContainer}></Route>
          <Route path="/resources" component={ResourcesContainer}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/">
            <Redirect to="/home"></Redirect>
          </Route>

          <Route path="*" component={NotFoundErrorContainer}></Route>
        </Switch>
      </BrowserRouter>
      <Footer
        currentYear={currentYear}
        GithubUrl={githubProfileUrl}
        ReactUrl={reactDocsUrl}
      />
    </HttpsRedirect>
  );
}

export default App;
