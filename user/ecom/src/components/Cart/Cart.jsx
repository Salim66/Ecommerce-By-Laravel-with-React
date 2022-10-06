import axios from 'axios';
import cogoToast from 'cogo-toast';
import React, { Component } from 'react';
import {Navbar,Container, Row, Col,Button,Card} from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import AppURL from '../../api/AppURL';
import Product1 from '../../assets/images/product/product1.png'

class Cart extends Component {

    constructor(){
        super();
        this.state = {
          cart_data : [],
          loaderDiv: '',
          mainDiv: 'd-none',
          cartCountPageRefresh: false,
        }
    }
    
    componentDidMount(){
    
        axios.get(AppURL.cartList(this.props.user.email))
        .then(res => {
          this.setState({ cart_data: res.data, loaderDiv: 'd-none', mainDiv: '' });
        })
        .catch(error => {
          console.log(error);
        })
    
    }

    removeCartList = (id) => {
        axios.get(AppURL.removeCartList(id))
        .then(res => {
            cogoToast.success('Cart item deleted successfully', {position: 'top-right'});
            this.setState({ cartCountPageRefresh: true });
        })
        .catch(error => {
            cogoToast.error(error.message, {position: 'top-right'});
        })
    }

    cartItemIncrement = (id, quantity, unit_price) => {
        axios.get(AppURL.cartItemIncrement(id, quantity, unit_price))
        .then(res => {
            cogoToast.success('Item Increment successfully', {position: 'top-right'});
            this.setState({ cartCountPageRefresh: true });
        })
        .catch(error => {
            cogoToast.error(error.message, {position: 'top-right'});
        })
    }

    cartItemDecrement = (id, quantity, unit_price) => {
        axios.get(AppURL.cartItemDecrement(id, quantity, unit_price))
        .then(res => {
            cogoToast.success('Item Decrement successfully', {position: 'top-right'});
            this.setState({ cartCountPageRefresh: true });
        })
        .catch(error => {
            cogoToast.error(error.message, {position: 'top-right'});
        })
    }

    pageRefresh = () => {
        if(this.state.cartCountPageRefresh === true){
            let URL = window.location;
            return (
                <Navigate to={URL} />
            )
        }
    }

    

  render() {

    let cart_data = this.state.cart_data;

    return (
      <>
        <Container fluid={true}>   

            <div className="section-title text-center mb-55"><h2>Product Cart List</h2></div>
            <Row>

                {
                    cart_data.map((data, i) => (
                <Col key={i} className="p-1" lg={7} md={7} sm={12} xs={12} >
                    <Card >                
                        <Card.Body>
                        <Row>
                                <Col md={3} lg={3} sm={6} xs={6}>
                                    <img className="cart-product-img" src={data.image} />
                                </Col>

                                <Col md={6} lg={6} sm={6} xs={6}>
                                <h5 className="product-name">{ data.product_name }</h5>
                                <h6>Quantity: { data.quantity }</h6>
                                <p>{ data.color } | { data.size }</p>
                                <h6>Price = { data.quantity } x { data.unit_price }$ = { data.total_price }$</h6>
                                </Col>

                                <Col md={3} lg={3} sm={12} xs={12}>
                                    
                                  <Button onClick={ () => this.removeCartList(data.id) } className="btn btn-lg mt-2 mx-2  site-btn"><i className="fa fa-trash-alt"></i></Button>
                                  <Button onClick={ () => this.cartItemIncrement(data.id, data.quantity, data.unit_price) } className="btn btn-lg mt-2 mx-2  site-btn"><i className="fa fa-plus"></i></Button>
                                  <Button onClick={ () => this.cartItemDecrement(data.id, data.quantity, data.unit_price) } className="btn btn-lg mt-2 mx-2  site-btn"><i className="fa fa-minus"></i></Button>

                                </Col>
                        </Row>              
                        </Card.Body>               
                    </Card>
                </Col> 
                    ))
                }
                




                {/* Checkout and Total Quantity, Price */}
                <Col className="p-1" lg={5} md={5} sm={12} xs={12} >
                    <Card >                
                        <Card.Body>
                            <h4 className='text-danger'>Total Due: $</h4>
                            <form action="">
                                <div className="form-rgoup">
                                    <label htmlFor="">Choose City</label>
                                    <select name="city" id="" className='form-control'>
                                        <option value="">Choose</option>
                                        <option value="Assam">Assam</option>
                                        <option value="Bihar">Bihar</option>
                                        <option value="Goa">Goa</option>
                                        <option value="Gujrat">Gujrat</option>
                                        <option value="Himachol Prodesh">Himachol Prodesh</option>
                                        <option value="Panjab">Panjab</option>
                                    </select>
                                </div>
                                <div className="form-rgoup">
                                    <label htmlFor="">Choose Payment Method</label>
                                    <select name="payment" id="" className='form-control'>
                                        <option value="">Choose</option>
                                        <option value="Cash On Delivery">Cash On Delivery</option>
                                        <option value="Stripe">Stripe</option>
                                    </select>
                                </div>
                                <div className="form-rgoup">
                                    <label htmlFor="">Your Name</label>
                                    <input type="text" name="name" className='form-control' />
                                </div>
                                <div className="form-rgoup">
                                    <label htmlFor="">Delivery Address</label>
                                    <textarea name="delivey_address" id="" cols="30" rows="5" className='form-control' ></textarea>
                                </div>
                                <br />
                                <div className="form-rgoup">
                                    <button type='submit' className='btn site-btn'>Confirm Order</button>
                                </div>
                            </form>
                        </Card.Body>               
                    </Card>
                </Col> 
            </Row>
        </Container>
        {this.pageRefresh()}
      </>
    )
  }
}

export default Cart;