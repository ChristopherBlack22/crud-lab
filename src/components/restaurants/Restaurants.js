import React, { Component } from 'react';
import Restaurant from "./Restaurant";

class Restaurants extends Component {

  render() {

    let restaurantsList;
    if(this.props.restaurants.length === 0) {
      restaurantsList = "No Restaurants"
    } else {
      restaurantsList = this.props.restaurants.map(restaurant => {
          return <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant} />
      })
    }

    return (
      <ul>
        {restaurantsList}
      </ul>
    );

  }
};

export default Restaurants;