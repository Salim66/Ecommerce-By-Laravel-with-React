import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class NotificationLoading extends Component {
  render() {
    let isLoading = this.props.isLoading;

    return (
      <div className={ isLoading }>
        <Row>
            <Col md={6}>
                <div class="ph-item">
                    <div class="ph-col-12">
                        <div class="ph-row">
                            <div class="ph-col-12"></div>
                            <div class="ph-col-12"></div>
                            <div class="ph-col-12"></div>
                        </div>
                    </div>
                </div>
            </Col>
            <Col md={6}>
                <div class="ph-item">
                    <div class="ph-col-12">
                        <div class="ph-row">
                            <div class="ph-col-12"></div>
                            <div class="ph-col-12"></div>
                            <div class="ph-col-4"></div>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
      </div>
    )
  }
}

export default NotificationLoading;