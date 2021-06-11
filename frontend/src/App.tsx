import React, { useState, useContext, createContext } from 'react'
import './App.css';
import Navbar from './components/Navbar'
import { ChakraProvider } from "@chakra-ui/react"
import Login from './pages/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import AppContext, { AppContextInterface } from './store/AppContext'
import PrivateRoute from './PrivateRoute';
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';


function App() {

  const [authenticated, setAuthenticated] = useState(localStorage.getItem('user') ? true : false)

  let state: AppContextInterface = {
    authenticated,
    setAuthenticated,
  }



  return (
    <AppContext.Provider value={state}>
      <ChakraProvider>
        <Router>
          <Navbar />
          <Switch>
            {/* Default path */}
            <Route path="/" exact>
              <Login />
            </Route>
            <PrivateRoute path="/home" component={Homepage}>
              <Homepage />
            </PrivateRoute>
            <Route path="/how">
              <AboutUs />
            </Route>
          </Switch>
        </Router>
      </ChakraProvider>
    </AppContext.Provider>
  );
}

export default App;
