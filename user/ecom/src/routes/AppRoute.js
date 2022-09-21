import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import CartPage from '../pages/CartPage';
import ContactPage from '../pages/ContactPage';
import FavouritePage from '../pages/FavouritePage';
import HomePage from '../pages/HomePage';
import NotificationPage from '../pages/NotificationPage';
import PrivacyPage from '../pages/PrivacyPage';
import ProductCategoryPage from '../pages/ProductCategoryPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import ProductSubCategoryPage from '../pages/ProductSubCategoryPage';
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
            <Route path="/about" element={ <AboutPage /> } />

            <Route path="/productdetails/:code" element={ <ProductDetailsPage /> } />
            <Route path="/notification" element={ <NotificationPage /> } />
            <Route path="/favourite" element={ <FavouritePage /> } />
            <Route path="/cart" element={ <CartPage /> } />
            <Route path="/productcategory/:category" element={ <ProductCategoryPage /> } />
            <Route path="/productsubcategory/:category/:subcategory" element={ <ProductSubCategoryPage /> } />
        </Routes>
      </>
    )
  }
}

export default AppRoute;