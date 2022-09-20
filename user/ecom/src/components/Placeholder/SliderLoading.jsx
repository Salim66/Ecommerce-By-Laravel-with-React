import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class SliderLoading extends Component {
  render() {

    let isLoading = this.props.isLoading;

    return (
      <div className={ isLoading }>
        <Row>
            <Col md={3}>
                <div class="ph-item">
                    <div class="ph-col-12">
                        <div class="ph-row">
                            <div class="ph-col-12"></div>
                            <div class="ph-col-12"></div>
                            <div class="ph-col-12"></div>
                            <div class="ph-col-12"></div>
                            <div class="ph-col-12"></div>
                            <div class="ph-col-12"></div>
                            <div class="ph-col-12"></div>
                            <div class="ph-col-12"></div>
                            <div class="ph-col-12"></div>
                            <div class="ph-col-12"></div>
                            <div class="ph-col-12"></div>
                        </div>
                    </div>
                </div>
            </Col>
            <Col md={9}>
                <div class="ph-item">
                    <div class="ph-col-12">
                        <div class="ph-picture"></div>
                    </div>
                </div>
            </Col>
        </Row>
      </div>
    )
  }
}

export default SliderLoading;