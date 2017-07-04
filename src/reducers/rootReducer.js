import { combineReducers } from 'redux';

import * as imagesList from './ImagesListReducer';

export default combineReducers(Object.assign(
  imagesList
));
