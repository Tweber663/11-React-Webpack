//Setting up UNIQE action types
const actionType1 = (type) => `app/cards/${type}`;
const ADD_CARD = actionType1('ADD_CARD');

const actionType2 = (type) => `app/cards/${type}`;
const TOGGLE_CARD_FAVORITE = actionType2('TOGGLE_CARD_FAVORITE');

const actionType3 = (type) => `app/cards/${type}`;
const REMOVE_CARD = actionType3('REMOVE_CARD');


//Action creators
export const addCard = payload => ({type: ADD_CARD, payload});
export const addFavorites = payload => ({type: TOGGLE_CARD_FAVORITE, payload});
export const removeCard = payload => ({type: REMOVE_CARD, payload})


//Standard creators 
export const favCardFilter = payload => payload.filter((card) => card.isFavorite === true);
export const getFilteredCards = ({cards, searchString}, columnId) => 
cards.filter(card => card.columnId === columnId && card.title.toLowerCase().includes(searchString.toLowerCase()));

 
const cardsReducer = (statePart = [], action) => {
    switch(action.type) {
      case ADD_CARD:
        return [...statePart, { ...action.payload}];
      case TOGGLE_CARD_FAVORITE:
        return statePart.map(card => (card.id === action.payload.cardId) ? { ...card, isFavorite: !card.isFavorite } : card);
       case REMOVE_CARD:
        console.log(action.payload.cards.id)
        return statePart.filter((card) => card.id !== action.payload.cards.id)
        default:
        return statePart;
    }
  }


  export default cardsReducer;