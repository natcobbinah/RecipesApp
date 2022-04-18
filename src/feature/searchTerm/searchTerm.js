import React from 'react';
import { setSearchTerm,clearSearchTerm } from './searchTermSlice';
import { icons } from '../../images/icons/allIcons';

export const SearchTerm = (props) => {
    const {searchTerm, dispatch} = props;

    const onSearchTermChangeHandler = (e) => {
        const userInput = e.target.value;
        dispatch(setSearchTerm(userInput));
    }

    const onClearSearchTermHandler = () => {
        dispatch(clearSearchTerm());
    }

    return (
        <div id="search-container">
            <img id="search-icon" alt="" src={icons.searchIcon}/>
            <input id="search" type="text" value={searchTerm} onChange={onSearchTermChangeHandler} 
                    placeholder="Search Recipes"/>
                    {
                        searchTerm.length > 0 && (
                            <button onClick={onClearSearchTermHandler} type="button"
                                id="search-clear-button">
                                    <img src={icons.removeIcon} alt=""/>
                            </button>
                        )
                    }
        </div>
    )
}