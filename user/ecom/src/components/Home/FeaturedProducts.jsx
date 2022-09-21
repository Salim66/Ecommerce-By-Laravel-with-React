import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AppURL from '../../api/AppURL';
import FeaturedLoading from '../Placeholder/FeaturedLoading';

class FeaturedProducts extends Component {

  constructor(){
    super();
    this.state = {
      featured_data : [],
      loaderDiv: '',
      mainDiv: 'd-none'
    }
  }

  componentDidMount(){

    axios.get(AppURL.productListByRemark('FEATURED'))
    .then(res => {
      this.setState({ featured_data: res.data, loaderDiv: 'd-none', mainDiv: '' });
    })
    .catch(error => {
      console.log(error);
    })

  }

  render() {

    let featured_data = this.state.featured_data;

    return (
      <>
        <Container className='text-center' fluid={true}>

          <div className='section-title text-center mb-55'>
            <h2>FEATURED PRODUCT</h2>
            <p>Some of Our Exclusive Collection, You May Like</p>
          </div>

          <div className={ this.state.loaderDiv }>
              <FeaturedLoading isLoading={ this.state.loaderDiv } />
          </div>

          <div className={ this.state.mainDiv }>
          <Row>

            {
              featured_data.map((data, i) => {
                if(data.special_price == 'na'){
                  return <Col className="p-1" key={i.toString()} xl={2} lg={2} md={2} sm={4} xs={6}>
                    <Link className='text-link' to={'/productdetails/'+data.id}>
                      <Card className="image-box card">
                        <img className='center' src={ data.image } alt="product-image" />
                        <Card.Body>
                          <p className='product-name-on-card'>{ data.title }</p>
                          <p className='product-price-on-card'>Price: { data.price }</p>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                }else {
                  return <Col className="p-1" key={i.toString()} xl={2} lg={2} md={2} sm={4} xs={6}>
                    <Link className='text-link' to={'/productdetails/'+data.id}>
                      <Card className="image-box card">
                        <img className='center' src={ data.image } alt="product-image" />
                        <Card.Body>
                          <p className='product-name-on-card'>{ data.title }</p>
                          <p className='product-price-on-card'>Price: <strike className="text-secondary">{ data.price }</strike> { data.special_price }</p>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                }
              })
            }
            
            

          </Row>
          </div>
        </Container>
      </>
    )
  }
}

export default FeaturedProducts