import React, { Component } from 'react'

class SearchBar extends Component {
    render() {
        return (
            <div>
                <input type="text"/>
                <div id="materialBox">
                    <div id="tabContainer">Tabs</div>
                    <div id="tabContent">Content</div>
                </div>
            </div>
        )
    }
}

export default SearchBar