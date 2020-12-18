import React, { useEffect, useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import './App.css';
import Welcome from './components/Welcome'
import Navbar from './components/Navbar'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = localStorage.getItem('jwtToken');
  return <Route {...rest} render={(props)=>{
    return user ? <Component { ...rest } { ...props }/> : <Redirect to="/login"/>
  }}/>
}

function App() {

  return (
    <div className="App">
      {/* <Navbar/> */}
      <Welcome />
    </div>
  );
}
export default App;