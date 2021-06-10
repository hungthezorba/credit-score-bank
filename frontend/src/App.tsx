import React, { useState, useContext, createContext } from 'react'
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
import AppContext, { AppContextInterface } from './store/AppContext'
import ExamplePage from './pages/ExamplePage';


function App() {

  const [authenticated, setAuthenticated] = useState(false)

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
            <Route path="/" exact>
              <Login />
            </Route>
            <Route path="/home">
              <ExamplePage />
            </Route>
            <Route path="/how">
              <ExamplePage />
            </Route>
          </Switch>
        </Router>
      </ChakraProvider>
    </AppContext.Provider>
  );
}

export default App;
