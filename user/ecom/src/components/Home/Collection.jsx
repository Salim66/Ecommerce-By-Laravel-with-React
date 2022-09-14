import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

class Collection extends Component {
  render() {
    return (
      <>
        <Container className='text-center' fluid={true}>

          <div className='section-title text-center mb-55'>
            <h2>PRODUCT COLLECTION</h2>
            <p>Some of Our Exclusive Collection, You May Like</p>
          </div>

          <Row>
            <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img className='center w-75' src="https://rukminim1.flixcart.com/image/832/832/kufuikw0/shirt/j/5/0/s-hlsh012786-highlander-original-imag7kcgyhkyr5wg.jpeg?q=70" alt="product-image" />
                <Card.Body>
                  <p className='product-name-on-card'>Men Slim Fit Printed Cut Away Collar Casual Shirt</p>
                  <p className='product-price-on-card'>Price: $60</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img className='center w-75' src="https://rukminim1.flixcart.com/image/832/832/kc0u7bk0/shirt/k/a/a/m-pk19sh09g-surhi-original-imaft8vgvhmhbhsy.jpeg?q=70" alt="product-image" />
                <Card.Body>
                  <p className='product-name-on-card'>Men Slim Fit Checkered Spread Collar Casual Shirt</p>
                  <p className='product-price-on-card'>Price: $100</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img className='center w-75' src="https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/m/h/1/m-hlsh011549-highlander-original-imafszke6updfj6s-bb.jpeg?q=70" alt="product-image" />
                <Card.Body>
                  <p className='product-name-on-card'>Men Slim Fit Printed Cut Away Collar Casual Shirt</p>
                  <p className='product-price-on-card'>Price: $200</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img className='center w-75' src="https://rukminim1.flixcart.com/image/832/832/kst9gnk0/shirt/u/a/t/l-frml-st2-vebnor-original-imag6apmphuh2ayu.jpeg?q=70" alt="product-image" />
                <Card.Body>
                  <p className='product-name-on-card'>Men Regular Fit Solid Button Down Collar Formal Shirt</p>
                  <p className='product-price-on-card'>Price: $300</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img className='center w-75' src="https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/z/h/2/3xl-t229hs-lmbl-eyebogler-original-imaghndncm4rawmm.jpeg?q=70" alt="product-image" />
                <Card.Body>
                  <p className='product-name-on-card'>Color Block Men Round Neck Yellow T-Shirt</p>
                  <p className='product-price-on-card'>Price: $20</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img className='center w-75' src="https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/o/m/q/l-new-black-1-u-turn-original-imagdmveyyyd4uva-bb.jpeg?q=70" alt="product-image" />
                <Card.Body>
                  <p className='product-name-on-card'>Men Slim Fit Solid Spread Collar Casual Shirt</p>
                  <p className='product-price-on-card'>Price: $25</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img className='center w-75' src="https://rukminim1.flixcart.com/image/832/832/ksuowi80/shirt/w/p/o/xxl-frml-st2-vebnor-original-imag6bkegkwmqv75.jpeg?q=70" alt="product-image" />
                <Card.Body>
                  <p className='product-name-on-card'>Men Regular Fit Solid Button Down Collar Formal Shirt</p>
                  <p className='product-price-on-card'>Price: $100</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img className='center w-75' src="https://rukminim1.flixcart.com/image/832/832/k5e7o280/shirt/z/r/8/m-c751-white-dennis-lingo-original-imafnyksuxtvyfxg.jpeg?q=70" alt="product-image" />
                <Card.Body>
                  <p className='product-name-on-card'>Men Slim Fit Checkered Slim Collar Casual Shirt</p>
                  <p className='product-price-on-card'>Price: $90</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default Collection