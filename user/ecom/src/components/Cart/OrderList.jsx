import axios from 'axios';
import React, { Component } from 'react';
import AppURL from '../../api/AppURL';
import {Navbar,Container, Row, Col,Button,Card} from 'react-bootstrap';

export class OrderList extends Component {

    constructor(){
        super();
        this.state = {
          order_data : []
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
                                            <button className='btn btn-danger'>Post Review</button>         
                                    </Card.Body>               
                                </Card>
                            </Col> 
                    })
                }
                
            </Row>
            </Container>
      </>
    )
  }
}

export default OrderList;