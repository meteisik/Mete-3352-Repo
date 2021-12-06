
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import NavbarV2 from './NavbarV2';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from "./Home.js"

function App() {



  return (

    <div className="App">

  <BrowserRouter>
      <NavbarV2/>
      <Switch>
   
   
                <Route exact path="/">
                <Redirect to="/Home" />
                </Route>
                <Route path='/Home' component={Home} />
          

      </Switch>

      
    </BrowserRouter>
    
      
    </div>
  );
}

//   <Route path='/USER' render={(props) => <Login {...props} tableData={this.state.tableData} tableData2={this.state.tableData2} />}/>

//
export default App;