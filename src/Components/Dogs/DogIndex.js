import React, {Component} from 'react';

export default class DogIndex extends Component {
    constructor() {
        super();
        this.state = {
            img: ''
        };
    };
    
    handleClick(e) {
        e.preventDefault();
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    img: data.message
                })
            })
            .catch(error => error)
    }

    render() {
        return(
            <div>
            <button onClick={(e) => this.handleClick(e)}>Random Doggo</button>
            <br/>
            <br/>
            <img src={this.state.img} alt="" />
            </div>
        )
    }
}