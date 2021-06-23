import { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar'
import { ChakraProvider } from "@chakra-ui/react"
import Login from './pages/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AppContext, { AppContextInterface } from './store/AppContext'
import PrivateRoute from './PrivateRoute';
import AboutUs from './pages/AboutUs';
import Result from './pages/Result'
import FileUpload from './pages/FileUpload';
import History from './pages/History';
import CustomerUpdate from './pages/CustomerUpdate';

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
            <Route path="/about">
              <AboutUs />
            </Route>

            <PrivateRoute path="/home" >
              <FileUpload />
            </PrivateRoute>
            <PrivateRoute path="/customer-update">
              <CustomerUpdate />
            </PrivateRoute>
            <PrivateRoute path="/result">
              <Result />
            </PrivateRoute>
            <PrivateRoute path="/history">
              <History />
            </PrivateRoute>
          </Switch>
        </Router>
      </ChakraProvider>
    </AppContext.Provider>
  );
}

export default App;