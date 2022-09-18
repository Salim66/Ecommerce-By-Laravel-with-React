import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import AppURL from '../../api/AppURL';

class Categories extends Component {

  constructor(){
    super();
    this.state = {
      catList : []
    }
  }

  componentDidMount(){
    axios.get(AppURL.AllCategoryDetails)
    .then(res => {
      this.setState({ catList: res.data });
    })
    .catch(error => {
      console.log('error');
    })
  }


  render() {

    let catList = this.state.catList;

    return (
      <>
        <Container className='text-center' fluid={true}>

          <div className='section-title text-center mb-55'>
            <h2>CATEGORIES</h2>
            <p>Some of Our Exclusive Collection, You May Like</p>
          </div>


          <Row>
            {
              catList.map((catList, i) => (
                <>
                  <Col key={i.toString()} className="p-0" xl={2} lg={2} md={2} sm={6} xs={6}>
                    <Card className="h-100 w-100 text-center">
                      <Card.Body>
                        <img className='center' src={ catList.category_image } alt="product-image" />
                        <h5 className='category-name'>{ catList.category_name }</h5>
                      </Card.Body>
                    </Card>
                  </Col>
                </>
              ))
            }
          </Row>

          
        </Container>
      </>
    )
  }
}

export default Categories