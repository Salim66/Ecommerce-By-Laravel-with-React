import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import HomeSlider from './HomeSlider';
import MegaMenu from './MegaMenu';

export class HomeTopMobile extends Component {
  render() {
    return (
      <>
        <Container className="p-0 m-0 overflow-hidden" fluid={true}>
            <Row className="p-0 m-0 overflow-hidden">
                <Col lg={12} md={12} sm={12}>
                    {/* <HomeSlider /> */}
                </Col>
            </Row>
        </Container>
      </>
    )
  }
}

export default HomeTopMobile;