import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AppURL from '../../api/AppURL';
import axios from 'axios';

class Collection extends Component {

  constructor(){
    super();
    this.state = {
      collection_data : []
    }
  }

  componentDidMount(){

    axios.get(AppURL.productListByRemark('COLLECTION'))
    .then(res => {
      this.setState({ collection_data: res.data });
    })
    .catch(error => {
      console.log(error);
    })

  }

  render() {

    let collection_data = this.state.collection_data;

    return (
      <>
        <Container className='text-center' fluid={true}>

          <div className='section-title text-center mb-55'>
            <h2>PRODUCT COLLECTION</h2>
            <p>Some of Our Exclusive Collection, You May Like</p>
          </div>

          <Row>

            {
              collection_data.map((data, i) => {
                if(data.special_price == 'na'){
                  return <Col className="p-0" key={i.toString()} xl={3} lg={3} md={3} sm={6} xs={6}>
                    <Card className="image-box card w-100">
                      <img className='center w-75' src={ data.image } alt="product-image" />
                      <Card.Body>
                        <p className='product-name-on-card'>{ data.title }</p>
                        <p className='product-price-on-card'>Price: { data.price }</p>
                      </Card.Body>
                    </Card>
                  </Col>
                }else {
                  return <Col className="p-0" key={i.toString()} xl={3} lg={3} md={3} sm={6} xs={6}>
                    <Card className="image-box card w-100">
                      <img className='center w-75' src={ data.image } alt="product-image" />
                      <Card.Body>
                        <p className='product-name-on-card'>{ data.title }</p>
                        <p className='product-price-on-card'>Price: <strike className="text-secondary">{ data.price }</strike> { data.special_price }</p>
                      </Card.Body>
                    </Card>
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

export default Collection