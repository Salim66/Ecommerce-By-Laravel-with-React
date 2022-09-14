import React, { Component } from 'react';
import Categories from '../components/Home/Categories';
import Collection from '../components/Home/Collection';
import FeaturedProducts from '../components/Home/FeaturedProducts';
import NewArrival from '../components/Home/NewArrival';

export class HomePage extends Component {
  render() {
    return (
      <>
        <FeaturedProducts />
        <NewArrival />
        <Collection />
        <Categories />
      </>
    )
  }
}

export default HomePage;