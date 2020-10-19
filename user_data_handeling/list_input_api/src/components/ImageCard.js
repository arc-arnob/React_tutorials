import React, { Component } from 'react'

class ImageCard extends Component {
    
    constructor(props){
        super(props)
        this.state = {spans: 0}
        this.imageRef = React.createRef()
    }
    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans); //adding callback
    }

    setSpans =()=>{
        const height = this.imageRef.current.clientHeight
        const spans = Math.ceil(height / 10) 
        this.setState({spans})
    }

    render() {
        const {desc, urls} = this.props.image;
        return (
            <div style = {{gridRowEnd: `span ${this.state.spans}`}}>
                <img 
                ref = {this.imageRef}
                alt={desc} 
                src={urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard
