import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    let reviewsList;
    if(this.props.reviews.length === 0) {
      reviewsList = "No Reviews"
    } else {
      let filterReviewsList = this.props.reviews.filter(review => (
        review.restaurantId === this.props.restaurantId
      ));
      reviewsList = filterReviewsList.map(review => {
          return <Review key={review.id} review={review} deleteReview={this.props.deleteReview} />
      })
    }
    

    return (
      <ul>
        {reviewsList}
      </ul>
    );
  }
};

export default Reviews;