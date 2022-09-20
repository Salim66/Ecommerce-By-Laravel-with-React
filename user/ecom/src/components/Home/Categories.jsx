import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import AppURL from '../../api/AppURL';
import { Link } from 'react-router-dom';
import CategoryLoading from '../Placeholder/CategoryLoading';

class Categories extends Component {

  constructor(){
    super();
    this.state = {
      catList : [],
      loaderDiv: '',
      mainDiv: 'd-none'
    }
  }

  componentDidMount(){
    axios.get(AppURL.AllCategoryDetails)
    .then(res => {
      this.setState({ catList: res.data, loaderDiv: 'd-none', mainDiv: '' });
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

          <div className={ this.state.loaderDiv }>
              <CategoryLoading isLoading={ this.state.loaderDiv } />
          </div>

          <div className={ this.state.mainDiv }>
          <Row>
            {
              catList.map((catList, i) => (
                <>
                  <Col key={i.toString()} className="p-0" xl={2} lg={2} md={2} sm={6} xs={6}>
                    <Link to={`/productcategory/${catList.category_name}`}> 
                      <Card className="h-100 w-100 text-center">
                        <Card.Body>
                          <img className='center' src={ catList.category_image } alt="product-image" />
                          <h5 className='category-name'>{ catList.category_name }</h5>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                </>
              ))
            }
          </Row>
          </div>
          
        </Container>
      </>
    )
  }
}

export default Categories