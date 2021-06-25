import React, { Component } from 'react'

export class SearchBar extends Component {
    state = {term: 'Default text'};

    onInputChange = (event) => {
        this.setState({term: event.target.value})
    }
    onFormSubmit = (event) =>{
        event.preventDefault() // this line prevents whole page from refresh on submit
        // TODO Make sure we call
        // callback from parent component
        this.props.onFormSubmit(this.state.term)
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={this.onInputChange}
                            //onChange={e => this.setState({term: e.target.value})}    
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar
