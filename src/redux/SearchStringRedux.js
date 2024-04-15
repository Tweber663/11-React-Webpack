const action1 = (type) => `app/searchString/${type}`;
const UPDATE_SEARCHSTRING = action1('UPDATE_SEARCHSTRING');


export const searchForm = payload => ({type: UPDATE_SEARCHSTRING, payload});


const searchStringReducer = (statePart = '', action) => {
    switch(action.type) {
      case UPDATE_SEARCHSTRING:
        return action.payload.payload
      default:
        return statePart;
    }
  }

  export default searchStringReducer;