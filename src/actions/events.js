export const ADD_EVENT = 'ADD_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';
export const EDIT_EVENT = 'EDIT_EVENT';

export const addEvent = (day, name) => ({
  type: ADD_EVENT,
  payload: { day, name }
});

export const removeEvent = day => ({ type: REMOVE_EVENT, payload: day });

export const editEvent = (day, newName) => ({
  type: EDIT_EVENT,
  payload: { day, newName }
});
