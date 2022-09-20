import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

class SubCategory extends Component {
    
    constructor(){
        super();
    }


  render() {

    let product_data = this.props.productData;

    return (
        <>
        <Container className='text-center'>

          <div className='section-title text-center mb-55'>
            <h2>{ this.props.category } / { this.props.subcategory }</h2>
          </div>

          <Row>

            {
              product_data.map((data, i) => {
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

export default SubCategory;