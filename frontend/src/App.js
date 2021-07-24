import React, {useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from "react-redux";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Booking from './components/Booking';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return isLoaded && (
    <>
    <Switch>
        <Route path="/" exact={true}>
          <Home/>
        </Route>
        <Route path="/login" exact={true}>
        <LoginFormPage />
      </Route>
        <Route path="/signup" exact={true}>
        <SignupFormPage />
      </Route>
        <Route path="/booking" exact={true}>
          <Booking />
        </Route>
    </Switch>
    </>
  );
}

export default App;
