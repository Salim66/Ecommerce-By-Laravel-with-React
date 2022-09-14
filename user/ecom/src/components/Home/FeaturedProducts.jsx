import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

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
            <Col>

            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default FeaturedProducts