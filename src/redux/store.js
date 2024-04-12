import { createStore } from 'redux';
import initialState from './initialState';
import List from '../components/List/List';
//selectors

const reducer = (state, action) => {

switch (action.type) {
  case "ADD_COLUMN":
    return { ...state, columns: [...state.columns, action.payload]};

  case "ADD_CARD":
    return  { ...state, cards: [...state.cards, action.payload]}; 

  case "UPDATE_SEARCHSTRING":
      return {...state, searchString: `${action.payload.payload}`};

    default:
      return state;
  
}
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const getListById = ({lists}, id) => lists.find((e) => e.id === id)

export const getColumnsByList = ({columns}, id) => columns.filter((e) => e.listId === id);

export const getFilteredCards = ({cards, searchString}, columnId) => 
cards.filter(card => card.columnId === columnId && card.title.toLowerCase().includes(searchString.toLowerCase()));

export const getAllColumns = ({columns}) => columns;

export const addColumn = payload => ({ type: 'ADD_COLUMN', payload});

export const addCard = payload => ({type: "ADD_CARD", payload});

export const searchForm = payload => ({type: "UPDATE_SEARCHSTRING", payload});

export default store;