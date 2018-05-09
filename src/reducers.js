import {CHANGE_SEARCH_FIELD} from './constants.js';

const initialState = {
  searchField: ''
};

export const searchRobots = (state=initialState, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      // returns new state object, which is a copy of state but with searchfield updated to action.payload
      return Object.assign({}, state, {searchField:action.payload});
    default:
      return state;
  }
}
