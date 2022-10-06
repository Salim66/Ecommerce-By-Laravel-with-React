import axios from 'axios';
import React, { Component } from 'react';
import AppURL from '../../api/AppURL';
import {Navbar,Container, Row, Col,Button,Card, Modal} from 'react-bootstrap';

export class OrderList extends Component {

    constructor(){
        super();
        this.state = {
          order_data : [],
          show: false,
          notification_data : [],
          loaderDiv: '',
          mainDiv: 'd-none',
          notificationMsg: '',
          notificationTitle: '',
          notificationDate: ''
        }
    }
    
    componentDidMount(){
    
        axios.get(AppURL.orderListByUser(this.props.user.email))
        .then(res => {
          this.setState({ order_data: res.data });
        })
        .catch(error => {
          console.log(error);
        })
    
    }

    handleClose = () => {
        this.setState({ show: false });
    }

    handleShow = (e) => {
        this.setState({ show: true });
        // get dynamic value by passing attribute
        let title = e.target.getAttribute('data-title');
        let message = e.target.getAttribute('data-message');
        let date = e.target.getAttribute('data-date');
        this.setState({ notificationTitle: title, notificationMsg: message, notificationDate: date });
    }

  render() {
    
    let order_data = this.state.order_data;
    console.log(order_data);
    return (
      <>
        <Container>   

            <div className="section-title text-center mb-55"><h2>Product Cart List</h2></div>
            <Row>

                {
                    order_data.map((data, i) => {
                    return <Col key={i} className="p-1" lg={7} md={7} sm={12} xs={12} >
                                <Card >                
                                    <Card.Body>
                                            <h5 className="product-name">{ data.product_name }</h5>
                                            <h6>Quantity: { data.quantity }</h6>
                                            <p>{ data.color } | { data.size }</p>
                                            <h6>Price = { data.quantity } x { data.unit_price }$ = { data.total_price }$</h6> 
                                            <button onClick={this.handleShow} className='btn btn-danger'>Post Review</button>         
                                    </Card.Body>               
                                </Card>
                            </Col> 
                    })
                }
                
            </Row>
            </Container>

            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <h6><i className="fa fa-bell"></i> Post your review this product.</h6>
                </Modal.Header>
                <Modal.Body>
                    <h6>Review</h6>
                    <p>Review</p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                    Close
                </Button>

                </Modal.Footer>
            </Modal>
      </>
    )
  }
}

export default OrderList;