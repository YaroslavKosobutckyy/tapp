import typeAction from './types';

export const loadBooksData = payload => ({
    type: typeAction.LOAD_BOOKS,
    payload
});
export const deleteBooksData = payload => ({
    type: typeAction.DELETE_BOOKS,
    payload: ''
});
