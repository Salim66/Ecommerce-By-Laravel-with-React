import React, { Component } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Validation from '../../validation';
import axios from 'axios';
import AppURL from '../../api/AppURL';

class Contact extends Component {

    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    // handle contact input 
    handleContactInput = (e) => {
        this.setState((prev) => ({ ...prev, [e.target.name] : e.target.value }));
    }

    // handle contact form
    handleContactForm = (e) => {
        e.preventDefault();

        // submit button
        let sendBtn = document.getElementById('sendBtn');
        // contact form
        let contactForm = document.getElementById('contactForm');
        
        if(!this.state.name){
            alert('Name field is required!');
        }else if(!this.state.email){
            alert('Email field is required!');
        }else if(!this.state.message) {
            alert('Message field is required!');
        }else if(!(Validation.NameRegex).test(this.state.name)){
            alert('Invlaid Name');
        }else {

            sendBtn.innerHTML = "Sending...";

            axios.post(AppURL.postContact, this.state)
            .then( res => {
                if(res.status == 201){

                    alert('Message send successfully :)');
                    this.setState({
                        name: '',
                        email: ''
                    });
                    contactForm.reset();
                    sendBtn.innerHTML = "Send";

                }else {
                    alert("Error");
                    sendBtn.innerHTML = "Send";
                }
            })
            .catch( error => {
                alert(error);
                sendBtn.innerHTML = "Send";
            })

        }

    }

  render() {
    return (
        <Container>
            <Row className='p-2'>
                <Col className='shadow-sm bg-white mt-2' lg={12} md={12} sm={12} xs={12}>
                    <Row className='text-center'>
                        <Col lg={6} md={6} sm={12} s={12}>
                            <Form id="contactForm" onSubmit={ this.handleContactForm } className="onboardForm">
                                <h4>CONTACT WITH US</h4>
                                <h6>Please contact with us</h6>
                                <input type="text" className='form-control m-2' name="name" placeholder='Enter Your Name' onChange={ this.handleContactInput } value={this.state.name} />
                                <input type="email" className='form-control m-2' name="email" placeholder='Enter Email Address' onChange={ this.handleContactInput } value={this.state.email} />
                                <textarea className='form-control m-2' name="message" placeholder='Enter Your Message'cols="30" rows="5" onChange={ this.handleContactInput }></textarea>

                                <Button id="sendBtn" type="submit" className='btn btn-block m-2 site-btn-login'>Send</Button>
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