import axios from 'axios';
import React, { Component } from 'react';
import AppURL from '../../api/AppURL';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';

class ReviewList extends Component {
    
    
  constructor(){
    super();
    this.state = {
      reviewData : []
    }
  }

  componentDidMount(){
    let code = this.props.code;
    axios.get(AppURL.reviewList(code))
    .then(res => {
      this.setState({ reviewData: res.data });
    })
    .catch(error => {
      console.log('error');
    })
  }


  render() {

    let reviewData = this.state.reviewData;

    return (
        <>
            {
                
                reviewData.map((data, i) => {
                    if(data.reviewer_rating === "1"){
                     return <div>
                        <p className=" p-0 m-0"><span className="Review-Title">{ data.reviewer_name }</span> <span className="text-success"><i className="fa fa-star"></i></span> </p>
                        <p>{ data.reviewer_comments }</p>
                     </div>
                    }else if(data.reviewer_rating === "2"){
                        return <div>
                        <p className=" p-0 m-0"><span className="Review-Title">{ data.reviewer_name }</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
                        <p>{ data.reviewer_comments }</p>
            
                        </div>
                    }else if(data.reviewer_rating === "3"){
                        return <div>
                        <p className=" p-0 m-0"><span className="Review-Title">{ data.reviewer_name }</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
                        <p>{ data.reviewer_comments }</p>
            
                        </div>
                    }else if(data.reviewer_rating === "4"){
                        return <div>
                        <p className=" p-0 m-0"><span className="Review-Title">{ data.reviewer_name }</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
                        <p>{ data.reviewer_comments }</p>
            
                   </div>
                    }else if(data.reviewer_rating === "5"){
                        return <div>
                        <p className=" p-0 m-0"><span className="Review-Title">{ data.reviewer_name }</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
                        <p>{ data.reviewer_comments }</p>
            
                   </div>
                    }else {
                        return <div>
                            <p>There have no review yet!</p>
                       </div>
                    }
                })
            }
        </>
      
    )
  }
}

export default ReviewList;