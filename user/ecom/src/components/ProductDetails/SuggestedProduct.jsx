import axios from 'axios';
import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppURL from '../../api/AppURL';

class SuggestedProduct extends Component {

    
  constructor(){
    super();
    this.state = {
      productData : []
    }
  }

  componentDidMount(){
    let code = this.props.subcategory;
    axios.get(AppURL.similarProduct(code))
    .then(res => {
      this.setState({ productData: res.data });
    })
    .catch(error => {
      console.log('error');
    })
  }



  render() {
  
    let productData = this.state.productData;

    return (
      <>
        <Container className='text-center' fluid={true}>

            <div className='section-title text-center mb-55'>
            <h2>YOU MAY LIKE</h2>
            <p>Some of Our Exclusive Collection, You May Like</p>
            </div>

            <Row>

            {
                productData.map((data, i) => {
                    if(data.special_price == 'na'){
                        return  <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
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
                        return  <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
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
        </Container>
      </>
    )
  }
}

export default SuggestedProduct;