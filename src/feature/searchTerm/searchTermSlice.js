const setSearchTerm = (term) => {
    return {
        type: 'searchTerm/setSearchTerm',
        payload: term
    }
}

const clearSearchTerm = () => {
    return {
        type: 'searchTerm/clearSearchTerm'
    };
}

const initialSearchTerm = '';
const searchTermReducer = (searchTerm = initialSearchTerm, action) => {
    switch (action.type) {
        case 'searchTerm/setSearchTerm':
            return action.payload
        case 'searchTerm/clearSearchTerm':
            return ''
        default:
            return searchTerm;
    }
}

//create searchTermSelector
const selectSearchTerm = (state) => state.searchTerm;

export {setSearchTerm, clearSearchTerm, searchTermReducer, selectSearchTerm};