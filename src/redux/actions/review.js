import axios from "axios";
import * as actionTypes from "./types";
import instance from "./instance";

export const getTravelPackageReviews = travelPackage => {
  const travelPackageID = travelPackage.id;
  return async dispatch => {
    try {
      const res = await instance.get(`reviews/${travelPackageID}/`);
      const travelPackageReviews = res.data;
      dispatch({
        type: actionTypes.GET_TRAVELPACKAGE_REVIEWS,
        payload: travelPackageReviews
      });
    } catch (err) {
      console.error("Error while fetching travel package reviews", err);
    }
  };
};

export const getUserReview = travelPackage => {
  const travelPackageID = travelPackage.id;
  return async dispatch => {
    try {
      const res = await instance.get(`review/${travelPackageID}/`);
      const userReview = res.data;
      dispatch({
        type: actionTypes.GET_USER_REVIEW,
        payload: userReview
      });
    } catch (err) {
      console.error("Error while fetching user Review", err);
    }
  };
};

//review={ratings:{value:3, attractions:5, shopping:4}, review:"Very nice!", package:{id:1,....}}
//travelPackageRatings = {ratings={value:4.7, attractions:3.8,shopping:4.2}, no_of_ratings:24)
export const postReview = (review, travelPackage) => {
  const travelPackagevalueRatings = travelPackage.ratings.value;
  const travelPackageattractionsRatings = travelPackage.ratings.attractions;
  const travelPackageshoppingRatings = travelPackage.ratings.shopping;
  const travelPackageno_of_ratings = travelPackageRatings.no_of_ratings;
  const travelPackageID = review.package.id;
  const userValueRating = review.ratings.value;
  const userAttractionsRating = review.ratings.value;
  const userShoppingRating = review.ratings.value;
  const review = review.review;
  const newValueRatings =
    (travelPackagevalueRatings * travelPackageno_of_ratings + userValueRating) /
      travelPackageno_of_ratings +
    1;
  const newAttractionsRatings =
    (travelPackageattractionsRatings * travelPackageno_of_ratings +
      userAttractionsRating) /
      travelPackageno_of_ratings +
    1;
  const newShoppingRatings =
    (travelPackageshoppingRatings * travelPackageno_of_ratings +
      userShoppingRating) /
      travelPackageno_of_ratings +
    1;
  const newTravelPackage = {
    ratings: {
      value: newValueRatings,
      attractions: newAttractionsRatings,
      shopping: newShoppingRatings
    },
    no_of_ratings: travelPackageno_of_ratings + 1,
    title: travelPackage.title,
    price: travelPackage.price,
    featured: travelPackage.price
  };
  return async () => {
    try {
      await instance.post(`${travelPackageID}/review/`, {
        ratings: ratings,
        review: review
      });
      await instance.put(`packages/${travelPackageID}/`, { newTravelPackage });
    } catch (err) {
      console.error("Error while posting user Review", err);
    }
  };
};
