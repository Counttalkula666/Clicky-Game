//this imports the react library/framework
import React, {Component} from 'react';
//this inserts our card body from the card component file
import Card from './Card';
//creating the main component
class Main extends Component {
    constructor(props) {
        super(props);
        this.state ={
            pictureArray:['/assets/glarson1.jpg','/assets/glarson2.jpg', '/assets/glarson3.jpg', '/assets/glarson4.jpg', '/assets/glarson5.jpg', '/assets/glarson6.jpg', '/assets/glarson7.jpg', '/assets/glarson8.jpg', '/assets/glarson9.jpg', '/assets/glarson10.jpg', '/assets/glarson11.jpg', '/assets/glarson12.jpg', '/assets/glarson13.jpg', '/assets/glarson14.jpg', '/assets/glarson15.jpg', '/assets/glarson16.jpg'],
            selectedItem:null, //need to save state of selected item and compare
        }
    }
    render() {
        return (
            <div>
                {this.state.pictureArray.map(imageSrc => {
                    return (
                        <Card src={imageSrc} alt={`Really Funny!!!!`} />
                        //method to onclick shuffle array and re-render
            
                    )
                })}
            </div>
        )
    }
}

export default Main;