import React, { Component } from 'react';
import Categories from '../components/Home/Categories';
import Collection from '../components/Home/Collection';
import FeaturedProducts from '../components/Home/FeaturedProducts';

export class HomePage extends Component {
  render() {
    return (
      <>
        <FeaturedProducts />
        <Collection />
        <Categories />
      </>
    )
  }
}

export default HomePage;