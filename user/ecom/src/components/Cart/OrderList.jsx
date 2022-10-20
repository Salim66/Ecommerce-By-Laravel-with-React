import React, { Component } from 'react';
import AppURL from '../../api/AppURL';
import {Navbar,Container, Row, Col,Button,Card, Modal} from 'react-bootstrap';
import cogoToast from 'cogo-toast';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

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
          notificationDate: '',
          name: '',
          rating: '',
          comment: '',
          product_name: '',
          product_code: ''
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

    handleShow = (product_name, product_code) => {
        this.setState({ show: true });
        this.setState({ product_name: product_name });
        this.setState({ product_code: product_code });
    }

    postReview = () => {

        let name = this.state.name;
        let rating = this.state.rating;
        let comment = this.state.comment;
        let product_name = this.state.product_name;
        let product_code = this.state.product_code;

        if(!name){
            cogoToast.warn('Please Enter your name', {position: 'top-right'});
        }else if(!rating){
            cogoToast.warn('Please select any rating method', {position: 'top-right'});
        }else if(!comment){
            cogoToast.warn('Please enter your comment', {position: 'top-right'});
        }else {

            let myFormData = new FormData();
            myFormData.append('product_code', product_code);
            myFormData.append('product_name', product_name);
            myFormData.append('reviewer_name', name);
            myFormData.append('reviewer_rating', rating);
            myFormData.append('reviewer_photo', "");
            myFormData.append('reviewer_comments', comment);

            axios.post(AppURL.postReview, myFormData)
            .then(res => {
                cogoToast.success('Review Submitted', {position: 'top-right'});
                this.handleClose();
            })
            .catch(error => {
                cogoToast.error(error.message, {position: 'top-right'});
            })

        }

    }

  render() {

    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }
    
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
                                            <button onClick={this.handleShow.bind(this, data.product_name, data.product_code)} className='btn btn-danger'>Post Review</button>         
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
                    <form action="">
                        <div className="my-2">
                            <label htmlFor="">Your Name</label>
                            <input type="text" name='name' className='form-control' onChange={ (e) => this.setState({ name: e.target.value }) } />
                        </div>
                        <div className="my-2">
                            <label htmlFor="">Choose Product Rating</label>
                            <select name="rating" id="" className='form-control' onChange={ (e) => this.setState({ rating: e.target.value }) }>
                                <option value="">Choose</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div className="my-2">
                            <label htmlFor="">Your Comment</label>
                            <textarea name="comment" className='form-control' rows="2" placeholder='Comment' onChange={ (e) => this.setState({ comment: e.target.value }) }></textarea>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={this.postReview}>
                    Post
                </Button>
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