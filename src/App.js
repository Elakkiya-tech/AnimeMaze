import Header from './components/Main/Header';

import './App.css';
import React from 'react';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Animedetails from './components/Details/Animedetail';


function App(){
 
 
  return (

    <div className="App">
    <Router>
      <Switch>  
      <Route path='/' exact component={Header} />
       <Route path='/Animedetails'component={Animedetails} />
      

     </Switch>
      </Router>
    
     
    </div>
   
  );
}

export default App;
