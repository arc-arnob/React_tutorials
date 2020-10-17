import React from 'react'
import Searchbar from './Searchbar'
import axios from 'axios'
import ImageList from './ImageList';


class App extends React.Component {
    state = {images: [] };
    onSearchSubmit = (term) =>{
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID Qe8jn9JSyrqNg3C69vplVKyxdsVaZ7HH2iJCAetkVXg'
            }
        }).then((response) => {
            this.setState({images: response.data.results})
        });
    }
    render(){
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <Searchbar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images}/> 
            </div>
        )
    }
}

export default App
