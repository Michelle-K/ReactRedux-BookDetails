//State argument is not application state, only the state this reducer is resonsible for

//reducers are responsible for changing application state over by through the use of actions
//whenever action is dispatched, it flows throught all the reducers in application
//each reducer has the option to retunr a different piece of state than usual
export default function (state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state
}