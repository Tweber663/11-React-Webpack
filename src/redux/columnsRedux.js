const actionType1 = (type) => `app/columns/${type}`;
const ADD_COLUMN = actionType1('ADD_COLUMN');

export const addColumn = payload => ({ type: ADD_COLUMN, payload});
export const getAllColumns = ({columns}) => columns;

const columnsReducer = (statePart = [], action) => {
    switch(action.type) {
      case ADD_COLUMN:
        return [...statePart, { ...action.payload}];
      default:
        return statePart;
    }
  }

  export default columnsReducer