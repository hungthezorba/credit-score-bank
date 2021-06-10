import React, { useState, useContext } from 'react'
import './App.css';
import Navbar from './components/Navbar'
import { ChakraProvider } from "@chakra-ui/react"
import Login from './pages/Login';
import FileUpload from './pages/FileUpload';
import Result from './pages/Result';
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
            {/* Default path */}
            <Route path="/" exact>
              <FileUpload />
            </Route>
            
            {/* Default path */}
            <Route path="/login">
              <Login />
            </Route>

            {/* Result path */}
            <Route path="/result">
              <Result />
            </Route>
          </Switch>
        </Router>
      </ChakraProvider>
    </AppContext.Provider>
  );
}

export default App;
