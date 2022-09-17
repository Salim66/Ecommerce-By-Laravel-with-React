import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import ContactPage from '../pages/ContactPage';
import FavouritePage from '../pages/FavouritePage';
import HomePage from '../pages/HomePage';
import NotificationPage from '../pages/NotificationPage';
import PrivacyPage from '../pages/PrivacyPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import PurchasePage from '../pages/PurchasePage';
import RefundPage from '../pages/RefundPage';
import UserLoginPage from '../pages/UserLoginPage';

export class AppRoute extends Component {
  render() {
    return (
      <>
        <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/login" element={ <UserLoginPage /> } />
            <Route path="/contact" element={ <ContactPage /> } />

            <Route path="/purchase" element={ <PurchasePage /> } />
            <Route path="/privacy" element={ <PrivacyPage /> } />
            <Route path="/refund" element={ <RefundPage /> } />
            <Route path="/productdetails" element={ <ProductDetailsPage /> } />
            <Route path="/notification" element={ <NotificationPage /> } />
            <Route path="/favourite" element={ <FavouritePage /> } />
        </Routes>
      </>
    )
  }
}

export default AppRoute;