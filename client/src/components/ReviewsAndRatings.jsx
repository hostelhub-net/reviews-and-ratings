import React from 'react';
import styled from 'styled-components';

import TotalRatings from './TotalRatings.jsx'

const Title = styled.h2`
  color: #444;
  line-height: 1.4;
  margin-bottom: 1.5rem;
  margin-top: 0;
  font-size: 24px;
  font-style: normal;
  font-weight: normal;
`;

class ReviewsAndRatings extends React.Component {
  constructor (props) {
    super(props)
  }

  findAverage (reviews) {
    let ratings = {
      atmosphere: [],
      cleanliness: [],
      facilities: [],
      location: [],
      security: [],
      staff: [],
      valueForMoney: []
    };

    for (let r = 0; r < reviews.length; r += 1) {
      const ratingEntries = Object.entries(reviews[r].ratings);
      for (let e = 0; e < ratingEntries.length; e += 1) {
        ratings[ratingEntries[e][0]].push(ratingEntries[e][1]);
      }
    }

    const allRatingEntries = Object.entries(ratings);
    for (let a = 0; a < allRatingEntries.length; a += 1) {
     ratings[allRatingEntries[a][0]] = this.findAverageRating(allRatingEntries[a][1]);
    }

    return ratings;
  }

  findAverageRating (ratings) {
    const total = ratings.reduce((acc, currVal) => acc + currVal);
    return Math.round((total / ratings.length) * 10) / 10;
  }

  render () {
    const ratings = this.findAverage(this.props.reviews.reviews);
    const totalRatings = this.findAverageRating(Object.values(ratings));
    return (
      <div id="reviewsAndRatings">
        <Title>Reviews & Ratings</Title>
        <TotalRatings 
          totalRatings={totalRatings}
          amtOfRatings={this.props.reviews.reviews.length}/>
      </div>
    )
  }
}

ReviewsAndRatings.defaultProps = {
  reviews: {
    reviews:[
      {
        ratings:{
          atmosphere: [],
          cleanliness: [],
          facilities: [],
          location: [],
          security: [],
          staff: [],
          valueForMoney: []
        }
      }
    ]
  }
}

export default ReviewsAndRatings;
