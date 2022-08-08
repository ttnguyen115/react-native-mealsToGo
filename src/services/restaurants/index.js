import camelize from "camelize";
import { mockImages, mocks } from "./mock";

export const restaurantsRequest = (location = "43.653225,-79.383186") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("Not found!");
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map(
      (photo) => mockImages[Math.ceil(Math.random() * (mockImages.length - 1))]
    );
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};

// restaurantsRequest()
//   .then(restaurantsTransform)
//   .catch((error) => console.log(error));