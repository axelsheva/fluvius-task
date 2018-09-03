import { ADD_EVENT, REMOVE_EVENT, EDIT_EVENT } from '../actions/events';

const initialState = [];

const events = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EVENT:
      return [...state, action.payload];
    case REMOVE_EVENT:
      return state.filter(event => event.day !== action.payload);
    case EDIT_EVENT:
      return state.map(event => {
        if (event.day === action.payload.day) {
          return { ...event, name: action.payload.newName };
        }
        return event;
      });
    default:
      return state;
  }
};

export default events;
