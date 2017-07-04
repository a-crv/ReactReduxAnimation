import * as ActionTypes from '../constants/actionTypes';

export function getImages() {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.GET_IMAGES_REQUEST
    });

    fetch('http://api.randomuser.me/1.0/?results=50&nat=gb,us&inc=gender,name,location,email,phone,picture', {
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(res => dispatch({
        type: ActionTypes.GET_IMAGES_SUCCESS,
        payload: res
    }))
    .catch((error) => dispatch({
      type: ActionTypes.GET_IMAGES_FAILURE,
      payload: error
    }));
  };
}

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
