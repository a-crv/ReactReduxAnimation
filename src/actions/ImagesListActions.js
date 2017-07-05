import * as ActionTypes from '../constants/actionTypes';

export function improveRating(id) {
  return {
    type: ActionTypes.IMPROVE_RATING,
    meta: {
      id
    }
  };
}

export function lowerRating(id) {
  return {
    type: ActionTypes.LOWER_RATING,
    meta: {
      id
    }
  };
}
