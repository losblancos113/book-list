//stat agr is not application state, only the state this reducer responsible for
export default (state = null, action) => {
    switch(action.type){
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
}
