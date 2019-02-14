import React, { Component } from "react";
import { Layout } from "../layouts/Layout";
import { Display } from "../layouts/Display";
import { Builder } from "../layouts/Builder";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route component={Display} path="/love" exact/>
            <Route component={Builder} path="/build" exact/> 
            <Redirect from="/" to="/build" />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}