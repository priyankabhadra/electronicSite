export const DELETE = 'DELETE';
export const UPDATE = 'UPDATE';
export const SAVE = 'SAVE'
;
export const deletion = (elemId) => ({
  type: DELETE,
  payload: elemId
});

export const Updation = (element, newField) => ({
  type: UPDATE,
  payload: {element, newField}
});

export const save = (element, updatdValue) => ({
    type: SAVE,
    payload: {element, updatdValue}
  });