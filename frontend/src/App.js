import React, {useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from "react-redux";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Booking from './components/Booking';
import MyReservation from './components/MyReservation';
import Gallery from './components/gallery';
import About from './components/About';
import Footer  from './components/Footer';

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
          < Footer />
      </Route>
        <Route path="/signup" exact={true}>
          <Navbar />
        <SignupFormPage />
      </Route>
        <Route path="/booking" exact={true}>
          <Navbar />
          <Booking />
        </Route>
         <Route path="/my-reservation" exact={true}>
          <Navbar />
          <MyReservation />
        </Route>
        <Route path="/gallery" exact={true}>
          <Navbar />
          <Gallery />
        </Route>
        <Route path="/about" exact={true}>
          <Navbar />
          <About />
        </Route>
    </Switch>
    </>
  );
}

export default App;
