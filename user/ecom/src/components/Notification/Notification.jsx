import React, { Component } from 'react';
import { Container,Row,Col, Card,Button,Modal } from 'react-bootstrap';
import AppURL from '../../api/AppURL';
import axios from 'axios';
import NotificationLoading from '../Placeholder/NotificationLoading';

class Notification extends Component {

    constructor(){
        super();
        this.state = {
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

        axios.get(AppURL.NotificationHistory)
        .then(res => {
          this.setState({ notification_data: res.data, loaderDiv: 'd-none', mainDiv: '' });
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

    let notification_data = this.state.notification_data;

    return (
      <>
        <Container className="TopSection">
            <div className={ this.state.loaderDiv }>
              <NotificationLoading isLoading={ this.state.loaderDiv } />
            </div>

            <div className={ this.state.mainDiv }>
            <Row>
                {
                    notification_data.map((data, i) => (
                        <Col key={i.toString()} className=" p-1 " md={6} lg={6} sm={12} xs={12}>
                            <Card onClick={this.handleShow} className="notification-card">
                                <Card.Body>
                                    <h6>{ data.title }</h6>
                                    <p className="py-1  px-0 text-primary m-0"><i className="fa  fa-bell"></i>   Date: { data.date } | Status: Unread</p>
                                    <Button data-title={ data.title } data-message={ data.message } data-date={ data.date } className='btn btn-danger'>Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
            </div>
        </Container>


        <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
            <h6><i className="fa fa-bell"></i> Date:{ this.state.notificationDate }</h6>
            </Modal.Header>
            <Modal.Body>
                <h6>{ this.state.notificationTitle }</h6>
                <p>{ this.state.notificationMsg }</p>
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

export default Notification;