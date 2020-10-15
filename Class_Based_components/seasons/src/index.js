import ReactDOM from 'react-dom'

import React, { Component } from 'react'

import Loader from "./Loader"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import SeasonDisplay from './SeasonDisplay'


export class App extends Component {

    // intializing props
    // constructor(props){
    //     super(props)
        
    //     this.state = {
    //         lat: null,
    //         lon: null,
    //         errorMessage: ''
    //     }
        
    // }

    state = {lat: null, errorMessage: ''}
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            GeolocationPosition => this.setState(
                {
                    lat : GeolocationPosition.coords.latitude,
                    lon : GeolocationPosition.coords.longitude
                }),
            err => this.setState({
                errorMessage: err.message
            })
        );    
    }

    renderContent=()=>{

        if(!this.state.errorMessage && !this.state.lat){
            return(
                <Loader/>
            )
        }
        if(this.state.lat && !this.state.errorMessage){
            return <SeasonDisplay lat={this.state.lat} lon={this.state.lon} />
        }
        

        return(
        <div>
            Error: {this.state.errorMessage}
        </div>
        )

    }

    render() {
        return(
            this.renderContent()
        )
        
        
    }
}




ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

export default App