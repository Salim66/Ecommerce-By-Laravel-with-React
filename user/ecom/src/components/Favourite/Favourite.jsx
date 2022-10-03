import axios from 'axios';
import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppURL from '../../api/AppURL';
import FeaturedLoading from '../Placeholder/FeaturedLoading';

class Favourite extends Component {

  constructor(){
    super();
    this.state = {
      favourite_data : [],
      loaderDiv: '',
      mainDiv: 'd-none'
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

  render() {

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
                  <Link to={'/productdetails/'+data.id}>
                    <Card className="image-box card">
                      <img className='center' src={ data.image } alt="product-image" />
                      <Card.Body>
                        <p className='product-name-on-card'>{ data.product_name }</p>
                        <Button className='btn btn-sm'><i className='fa fa-trash-alt'></i> Remove </Button>
                      </Card.Body>
                    </Card>
                  </Link>
              </Col>
            ))
          }

        </Row>
        </div>
      </Container>
    )
  }
}

export default Favourite;