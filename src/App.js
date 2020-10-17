import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import { createContext } from 'react';
import { useState } from 'react';
import Dasboard from './components/Dasboard/Dashboard/Dasboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';


export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInuser] = useState({});
  const [itemId , setItemId] = useState({})
  return (
    <UserContext.Provider value={{loggedInUser,setLoggedInuser,itemId , setItemId}}>
      <Router>
        <Switch> 
          <Route exact path="/"> 
            <Home></Home>
          </Route>
          <PrivateRoute path="/dasboard"> 
            <Dasboard></Dasboard>
          </PrivateRoute>
          <Route path="/login"> 
              <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
