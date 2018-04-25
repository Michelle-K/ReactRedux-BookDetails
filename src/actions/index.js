//actions are just JS Objects

export function selectBook(book) {
    //selectBook is an ActionCreator, it needs to return an action
    //an object witha type property
    return {
        type: 'BOOK_SELECTED', //required
        payload: book  //optional: payload is piece of data
    };
}