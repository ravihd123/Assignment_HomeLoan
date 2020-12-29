
import './App.css';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PersonalDetails } from "./pages/Personaldetails";
import { PropertyDetails } from "./pages/PropertyDetails";
import { FinancialDetails } from "./pages/Financialdetails";
import { Demographics } from "./pages/Demographics";
import { Summary } from "./pages/Summary";

import * as FaIcons from 'react-icons/fa';


function App() {
  return (

    <>
      <Router>
        <div className='navbar'>
          <div>
            <img src='https://www.gstatic.com/webp/gallery/1.jpg' alt="logo" width="130" height="40" />
            <FaIcons.FaBars className='hamIcon' />
          </div>
        </div>

        <div className="row">
          <div className="column1" >
            <Navbar />
          </div>
          <div className="column2">
            <Switch>
              <Route path='/personldetails' exact component={PersonalDetails} />
              <Route path='/propertydetails' component={PropertyDetails} />
              <Route path='/financialdetails' component={FinancialDetails} />
              <Route path='/demographics' component={Demographics} />
              <Route path='/summary' component={Summary} />
            </Switch>
          </div>

        </div>

      </Router>
    </>
  );
}

export default App;
