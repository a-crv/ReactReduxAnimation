import createReducer from '../utils/createReducer';
import * as ActionTypes from '../constants/actionTypes';

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const data = [];

for (let i = 0; i < 11; i++) {
  let randomCount = getRandomInRange(0, 9);

  data.push({
    id: i,
    rating: 0,
    url: `http://lorempixel.com/200/200/sports/${randomCount}`
  })
}

function sortImagesByRating(a, b) {
  return a.rating - b.rating;
}

const initialState = {
  data,
  error: null,
  fetched: false,
  fetching: false
};

export const imagesList = createReducer(initialState, {
  [ActionTypes.GET_IMAGES_REQUEST](state) {
    return {
      ...state,
      fetching: true
    };
  },

  [ActionTypes.GET_IMAGES_SUCCESS](state, action) {
    return {
      ...state,
      data: action.payload,
      fetched: true,
      fetching: false
    };
  },

  [ActionTypes.GET_IMAGES_FAILURE](state, action) {
    return {
      ...state,
      error: action.payload,
      fetching: false
    };
  },

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
