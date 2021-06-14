import typeAction from '../action/types';

const stateBooks = {
    books: JSON.parse(localStorage.getItem('books'))
};

export const booksReducer = (state = stateBooks, action) => {
    switch (action.type) {
        case typeAction.LOAD_BOOKS:
            return {
                books: action.payload
            };
        case typeAction.DELETE_BOOKS:
            return {
                
            }
        default:
            return state;
    }
};
