import React, { Component } from 'react'
import CovidTracker from './screen/CovidTracker';
import Layout from './screen/Layout';
/***********************/
import {BrowserRouter, Route, Switch } from 'react-router-dom';
//import HomeScreen from './screen/HomeScreen';
//import ProductScreen from './screen/ProductScreen';
//import './App.css';

// ####################################################################################################################################
   class App extends Component {
      render() {
         const test = (<h1> Not Found </h1>);
         
         return (
            <BrowserRouter>
               <div id="page-loader" className="fade show"><span className="spinner"></span></div>
               <Switch>
                  <Route path="/" exact={true} component={() => <Layout title={`Dashboard`} />} />
                  <Route path="/covid-tracker" exact={true} component={() => <CovidTracker title={`CovidTracker`} />} />
                  <Route>{test}</Route>
               </Switch>
            </BrowserRouter>
         )
         
      }
   }
   
// ####################################################################################################################################
   export default App

// ####################################################################################################################################