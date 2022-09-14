import React, { Component } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

export class FeaturedProducts extends Component {
  render() {
    return (
      <>
        <Container className='text-center' fluid={true}>

          <div className='section-title text-center mb-55'>
            <h2>FEATURED PRODUCT</h2>
            <p>Some of Our Exclusive Collection, You May Like</p>
          </div>

          <Row>

            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img className='center' src="https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/b/o/n/-original-imagg3myvj6f3pez.jpeg?q=70" alt="product-image" />
                <Card.Body>
                  <p className='product-name-on-card'>Realme C30s (Stripe Blue, 32 GB)</p>
                  <p className='product-price-on-card'>Price: $100</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img className='center' src="https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/6/9/w/-original-imagg34wducvv4ya.jpeg?q=70" alt="product-image" />
                <Card.Body>
                  <p className='product-name-on-card'>MOTOROLA Edge 30 Fusion (Solar Gold, 128 GB)</p>
                  <p className='product-price-on-card'>Price: $150</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img className='center' src="https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/s/s/a/-original-imaghsptxpgsqqry.jpeg?q=70" alt="product-image" />
                <Card.Body>
                  <p className='product-name-on-card'>POCO M5 (Icy Blue, 64 GB)</p>
                  <p className='product-price-on-card'>Price: $60</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img className='center' src="https://rukminim1.flixcart.com/image/416/416/l0tweq80/mobile/x/f/u/-original-imagcgtghym8theg.jpeg?q=70" alt="product-image" />
                <Card.Body>
                  <p className='product-name-on-card'>REDMI 10 (Midnight Black, 64 GB)</p>
                  <p className='product-price-on-card'>Price: $70</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img className='center' src="https://rukminim1.flixcart.com/image/416/416/l2jcccw0/mobile/h/x/3/-original-imagduwqakhhkrse.jpeg?q=70" alt="product-image" />
                <Card.Body>
                  <p className='product-name-on-card'>OPPO K10 (Black Carbon, 128 GB)</p>
                  <p className='product-price-on-card'>Price: $20</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img className='center' src="https://rukminim1.flixcart.com/image/416/416/ky7lci80/mobile/l/w/z/-original-imagahvnzfgdg8jy.jpeg?q=70" alt="product-image" />
                <Card.Body>
                  <p className='product-name-on-card'>ASUS ROG 5s (Phantom Black, 256 GB)</p>
                  <p className='product-price-on-card'>Price: $570</p>
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Container>
      </>
    )
  }
}

export default FeaturedProducts