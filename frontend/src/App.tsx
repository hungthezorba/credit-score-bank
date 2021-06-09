import React, { useState, useContext } from 'react'
import './App.css';
import Navbar from './components/Navbar'
import { ChakraProvider } from "@chakra-ui/react"
import Login from './pages/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AppContext from './store/AppContext'

function App() {

  const [authenticated, setAuthenticated] = useState(false)

  let state = {
    authenticated,
    setAuthenticated
  }

  

  return (
    <AppContext.Provider value={state}>
      <ChakraProvider>
        <Router>
          <Navbar/>
          <Switch>
            <Route path="/" exact>
              <Login/>
            </Route>
          </Switch>
        </Router>
      </ChakraProvider>
    </AppContext.Provider>
  );
}

export default App;
