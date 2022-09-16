import React, { Component } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

class Contact extends Component {
  render() {
    return (
        <Container>
            <Row className='p-2'>
                <Col className='shadow-sm bg-white mt-2' lg={12} md={12} sm={12} xs={12}>
                    <Row className='text-center'>
                        <Col lg={6} md={6} sm={12} s={12}>
                            <Form className="onboardForm">
                                <h4>CONTACT WITH US</h4>
                                <h6>Please contact with us</h6>
                                <input type="text" className='form-control m-2' name="" placeholder='Enter Mobile Number' />
                                <input type="text" className='form-control m-2' name="" placeholder='Enter Email Address' />
                                <input type="text" className='form-control m-2' name="" placeholder='Enter Your Message' />
                                <Button className='btn btn-block m-2 site-btn-login'>Send</Button>
                            </Form>
                        </Col>
                        <Col className='m-0 p-0 desktop' lg={6} md={6} sm={12} s={12}><br/><br/>
                            <p className='section-title-contact'>
                                Paglapir, Rangpur-5400, Bangladesh
                                Email: salimhasanriad@gmail.com
                            </p>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.775423211257!2d89.13735731449701!3d25.810982062859587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sbd!4v1663310111230!5m2!1sen!2sbd" width="600" height="450" styles="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
  }
}

export default Contact;