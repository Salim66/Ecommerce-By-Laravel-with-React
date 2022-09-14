import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';

export class AppRoute extends Component {
  render() {
    return (
      <>
        <Routes>
            <Route path="/" element={ <HomePage /> } />
        </Routes>
      </>
    )
  }
}

export default AppRoute;