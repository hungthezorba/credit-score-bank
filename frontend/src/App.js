import logo from './logo.svg';
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

function App() {
  return (
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
  );
}

export default App;
