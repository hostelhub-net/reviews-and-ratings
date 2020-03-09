import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';

import ReviewsAndRatings from './ReviewsAndRatings';
import LatestReviews from './LatestReviews';

const Reviews = styled.div`
  box-sizing: border-box;
  font-family: Arial;
  margin: 5px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }

  componentDidMount() {
    const self = this;
    const id = window.location.pathname.split('/')[5];

    $.ajax({
      method: 'GET',
      url: `/api/hostels/${id}/reviews`,
      success: (reviews) => {
        self.setState({ reviews });
      },
      error: (error) => { throw error; },
    });
  }

  render() {
    const { reviews } = this.state;
    return (
      <Reviews>
        <ReviewsAndRatings reviews={reviews[0]} />
        <LatestReviews reviews={reviews[0]} />
      </Reviews>
    );
  }
}

export default App;
window.ReviewsAndRatings = App;
