import axios from 'axios';
import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppURL from '../api/AppURL';
import NavMenuDesktop from '../components/Common/NavMenuDesktop';
import AboutPage from '../pages/AboutPage';
import CartPage from '../pages/CartPage';
import ContactPage from '../pages/ContactPage';
import FavouritePage from '../pages/FavouritePage';
import ForgetPasswordPage from '../pages/ForgetPasswordPage';
import HomePage from '../pages/HomePage';
import NotificationPage from '../pages/NotificationPage';
import OrderListPage from '../pages/OrderListPage';
import PrivacyPage from '../pages/PrivacyPage';
import ProductCategoryPage from '../pages/ProductCategoryPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import ProductSubCategoryPage from '../pages/ProductSubCategoryPage';
import ProfilePage from '../pages/ProfilePage';
import PurchasePage from '../pages/PurchasePage';
import RefundPage from '../pages/RefundPage';
import ResetPasswordPage from '../pages/ResetPasswordPage';
import SearchPage from '../pages/SearchPage';
import UserLoginPage from '../pages/UserLoginPage';
import UserRegisterPage from '../pages/UserRegisterPage';

export class AppRoute extends Component {

  constructor(){
    super();
    this.state = {
      user: {}
    }
  }

  componentDidMount(){
    axios.get(AppURL.userData)
    .then(res => {
      this.setUser(res.data);
    })
    .catch(error => {
      console.log(error);
    })
  }

  setUser = (user) => {
    this.setState({user:user});
  }

  render() {
    return (
      <>
        <NavMenuDesktop user={this.state.user} setUser={this.setUser} />

        <Routes>

            <Route path="/" element={ <HomePage /> } />

            <Route path="/login" element={ <UserLoginPage user={this.state.user} setUser={this.setUser} /> } />
            <Route path="/register" element={ <UserRegisterPage user={this.state.user} setUser={this.setUser} /> } />
            <Route path="/forget" element={ <ForgetPasswordPage /> } />
            <Route path="/reset/:id" element={ <ResetPasswordPage /> } />
            <Route path="/profile" element={ <ProfilePage user={this.state.user} setUser={this.setUser} /> } />


            <Route path="/contact" element={ <ContactPage /> } />
            <Route path="/purchase" element={ <PurchasePage /> } />
            <Route path="/privacy" element={ <PrivacyPage /> } />
            <Route path="/refund" element={ <RefundPage /> } />
            <Route path="/about" element={ <AboutPage /> } />

            <Route path="/productdetails/:code" element={ <ProductDetailsPage user={this.state.user} /> } />
            <Route path="/notification" element={ <NotificationPage /> } />
            <Route path="/favourite" element={ <FavouritePage user={this.state.user} /> } />
            <Route path="/cart" element={ <CartPage user={this.state.user} /> } />
            <Route path="/orderlist" element={ <OrderListPage user={this.state.user} /> } />
            <Route path="/productcategory/:category" element={ <ProductCategoryPage /> } />
            <Route path="/productsubcategory/:category/:subcategory" element={ <ProductSubCategoryPage /> } />
            <Route path="/searchbykey/:searchKey" element={ <SearchPage /> } />
        </Routes>
      </>
    )
  }
}

export default AppRoute;