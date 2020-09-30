import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';

import {faCheckSquare} from "@fortawesome/free-solid-svg-icons";

//REDUX
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./modules/store";

import Header from "./components/Header";
import Overview from "./pages/Overview";
import Why from "./pages/Why";
import How from "./pages/HowToUse";
import './App.css';
import Todo from "./app/Todo";

const reduxStore = configureStore();

function App() {

  return (
    <>
        <ReduxProvider store={reduxStore}>
            <Router>
                <Header nameApp={'Simple ToDo'} icon={faCheckSquare}/>
                <Switch>
                    <Route exact path='/' component={Todo}/>
                    <Route path='/Overview' component={Overview}/>
                    <Route path='/Why' component={Why}/>
                    <Route path='/HowToUse' component={How} />
                </Switch>
            </Router>
        </ReduxProvider>
    </>
  );
}

export default App;
