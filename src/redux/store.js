import { createStore } from 'redux';
import initialState from './initialState';
import List from '../components/List/List';
import { act } from '@testing-library/react';
//selectors

const reducer = (state, action) => {
  const newState = {
    lists: listsReducer(state.lists, action),
    columns: columnsReducer(state.columns, action),
    cards: cardsReducer(state.cards, action),
    searchString: searchStringReducer(state.searchString, action)
  };

  return newState;
};

  const columnsReducer = (statePart = [], action) => {
    switch(action.type) {
      case 'ADD_COLUMN':
        return [...statePart, { ...action.payload, id: shortid() }];
      default:
        return statePart;
    }}

  //   case "ADD_COLUMN":
  //     return { ...state, columns: [...state.columns, action.payload]};


  const cardsReducer = (statePart = [], action) => {
    switch(action.type) {
      case 'ADD_CARD':
        return [...statePart, { ...action.payload, id: shortid() }];
      case 'TOGGLE_CARD_FAVORITE':
        return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
      default:
        return statePart;
    }}

    const searchStringReducer = (statePart = '', action) => {
      switch(action.type) {
        case 'UPDATE_SEARCHSTRING':
          return action.payload
        default:
          return statePart;
      }}

    const listsReducer = (statePart = [], action) => {
      switch(action.type) {
        case 'ADD_LIST':
          return [...statePart, { ...action.payload, id: shortid() }];
        default:
          return statePart;
      }}


// switch (action.type) {

//   case "ADD_COLUMN":
//     return { ...state, columns: [...state.columns, action.payload]};

//   case "ADD_CARD":
//     return  { ...state, cards: [...state.cards, action.payload]}; 

//   case "UPDATE_SEARCHSTRING":
//       return {...state, searchString: `${action.payload.payload}`};

//   case "ADD_LIST":
//   return {...state, lists: [...state.lists, action.payload]}

//   case "TOGGLE_CARD_FAVORITE":
//     return { ...state, cards: state.cards.map(card => (card.id === action.payload.cardId) ? { ...card, isFavorite: !card.isFavorite } : card) };

//     default:
//       return state;
  
// }
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

export const addFavorites = payload => {
  return ({type: 'TOGGLE_CARD_FAVORITE', payload})
}

export const getAllColumns = ({columns}) => columns;

export const addColumn = payload => ({ type: 'ADD_COLUMN', payload});

export const addCard = payload => ({type: "ADD_CARD", payload});

export const searchForm = payload => ({type: "UPDATE_SEARCHSTRING", payload});

export const addList = payload => ({type: "ADD_LIST", payload})

export const favCardFilter = payload => {
  return payload.filter((card) => card.isFavorite === true);
}

export default store;