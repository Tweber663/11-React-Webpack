//Giving action type uniqe CONST
const createActionName = actionName => `app/lists/${actionName}`;
const ADD_LIST = createActionName('ADD_LIST');

//action creator (unique const is passed)
export const addList = payload => ({type: ADD_LIST, payload})

//Normal selectors
export const getListById = ({lists}, id) => lists.find((e) => e.id === id)
export const getColumnsByList = ({columns}, id) => columns.filter((e) => e.listId === id);


const listsReducer = (statePart = [], action) => {
    switch(action.type) {
      case ADD_LIST:
        return [...statePart, { ...action.payload}];
      default:
        return statePart;
    }
  }

  export default listsReducer