//Import React Components
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Import custom components
import Home from './components/Home';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Status from './components/Status';
import NotFound from './components/NotFound';

//Import Layouts
import './App.css';
import Layout from './components/layout/Layout';
import NavigationBar from './components/layout/NavigationBar';
import Jumbotron from './components/layout/Jumbotron';

//Main Routing & Display
function App() {
  return (
   <Fragment>
     <NavigationBar />
     <Jumbotron />
     <Layout>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/signup' component={Newsletter}></Route>
          <Route exact path='/contact' component={Contact}></Route>
          <Route exact path='/status' component={Status}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
     </Layout>
   </Fragment>
  );
}

export default App;

//Iteration notes:
//[1] Add further functionality to home page catalogue (maybe Flickr API / https://thecatapi.com/ endpoint?)