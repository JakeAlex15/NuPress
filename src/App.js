import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";
import PodcastHome from './components/PodcastHome';
import AnimalFarm from './components/AnimalFarm';
import TheShack from './components/TheShack';
import StephenKing from './components/StephenKing';
import AofW from './components/AofW';

class App extends Component {
    render() {
        return(
            <React.Fragment>
               <Navbar />
               <Switch>
                <Route exact path="/" component={ProductList} />
                <Route path="/podcasthome" component= { PodcastHome } />
                <Route path="/details" component={Details} />
                <Route path="/cart" component={Cart} />
                <Route path="/animalfarm" component= { AnimalFarm } />
                <Route path="/theshack" component= { TheShack } />
                <Route path="/stephenking" component= { StephenKing } />
                <Route path="/aofw" component= { AofW } />
                <Route component={Default} />
               </Switch>
               <Modal />
            </React.Fragment>
        );
    }
}

export default App;