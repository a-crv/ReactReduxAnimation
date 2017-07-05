import createReducer from '../utils/createReducer';
import * as ActionTypes from '../constants/actionTypes';

const data = [];

const initialState = {
  data
};

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sortImagesByRating(a, b) {
  return b.rating - a.rating;
}

for (let i = 0; i < 8; i++) {
  let randomCount = getRandomInRange(1, 250);

  data.push({
    id: i,
    rating: 0,
    url: `https://unsplash.it/200/200?image=${randomCount}`
  })
}

export const imagesList = createReducer(initialState, {
  [ActionTypes.IMPROVE_RATING](state, action) {
    let newState = Object.assign({}, state);

    for (let i = 0; i < newState.data.length; i++) {
      if (newState.data[i].id === action.meta.id) {
        newState.data[i].rating += 1;
        break;
      }
    }

    newState.data.sort(sortImagesByRating);

    return newState;
  },

  [ActionTypes.LOWER_RATING](state, action) {
    let newState = Object.assign({}, state);

    for (let i = 0; i < newState.data.length; i++) {
      if (newState.data[i].id === action.meta.id) {
        newState.data[i].rating ? newState.data[i].rating -= 1 : 0;
        break;
      }
    }

    newState.data.sort(sortImagesByRating);

    return newState;
  }
});
