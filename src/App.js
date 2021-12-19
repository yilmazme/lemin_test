import React, {useState} from 'react';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("logged"))
  );

  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/">
            <Login />
          </Route>
        <ProtectedRoute
            showRoute={isLoggedIn}
            path="/home"
            component={Home}
          />
        </Switch>
    </Router>
    </div>
  );
}

export default App;
