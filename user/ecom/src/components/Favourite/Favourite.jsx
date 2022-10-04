import React, { Component } from 'react';
import axios from 'axios';
import cogoToast from 'cogo-toast';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import AppURL from '../../api/AppURL';
import FeaturedLoading from '../Placeholder/FeaturedLoading';

class Favourite extends Component {

  constructor(){
    super();
    this.state = {
      favourite_data : [],
      loaderDiv: '',
      mainDiv: 'd-none',
      cartCountPageRefresh: false
    }
  }

  componentDidMount(){

    axios.get(AppURL.favouriteList( this.props.user.email ))
    .then(res => {
      this.setState({ favourite_data: res.data, loaderDiv: 'd-none', mainDiv: '' });
    })
    .catch(error => {
      console.log(error);
    })

  }

  handleDataRemove = (e) => {
    let productCode = e.target.getAttribute('data-code');
    let email = this.props.user.email;

    if(!localStorage.getItem('token')){
        cogoToast.warn('Please you have to logged in first', {position: 'top-right'});
    }else {

        axios.get(AppURL.favouriteRemove(productCode, email))
        .then(res => {
            cogoToast.success('Favourite product remove successfully', {position: 'top-right'});
            this.setState({ cartCountPageRefresh: true });
            this.pageRefresh();
        })
        .catch(error => {
            cogoToast.error('Your request is not done! Try Again', {position: 'top-right'});
        })
    }

  }

  pageRefresh = () => {
    if(this.state.cartCountPageRefresh === true){
        let URL = window.location;
        return (
            <Navigate to={URL} />
        )
    }
  }

  render() {

    if(!localStorage.getItem('token')){
      return <Navigate to='/login' />
    }

    let favourite_data = this.state.favourite_data;

    return (
        <Container className='text-center' fluid={true}>

        <div className='section-title text-center mb-55'>
          <h2>MY FAVOURITE ITEMS</h2>
          <p>Some of Our Exclusive Collection, You May Like</p>
        </div>

        <div className={ this.state.loaderDiv }>
            <FeaturedLoading isLoading={ this.state.loaderDiv } />
        </div>

        <div className={ this.state.mainDiv }>
        <Row>

          {
            favourite_data.map((data, i) => (
              <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                    <Card className="image-box card">
                      <Link to={'/productdetails/'+data.id}>
                        <img className='center' src={ data.image } alt="product-image" />
                      </Link>
                      <Card.Body>
                        <p className='product-name-on-card'>{ data.product_name }</p>
                        <Button onClick={ this.handleDataRemove } data-code={ data.product_code } className='btn btn-sm'><i className='fa fa-trash-alt'></i> Remove </Button>
                      </Card.Body>
                    </Card>
              </Col>
            ))
          }

        </Row>
        </div>
        { this.pageRefresh() }
      </Container>
    )
  }
}

export default Favourite;