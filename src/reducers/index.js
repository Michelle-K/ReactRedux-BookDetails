import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

//combines all of our reducers together
const rootReducer = combineReducers({
    //for each key in our combineReducers object, we assign one reducer
    //the reducer is responsible for creating a piece of state. (ex. whatever ActiveBook returns)
    books: BooksReducer,
    activeBook: ActiveBook
});

export default rootReducer;
