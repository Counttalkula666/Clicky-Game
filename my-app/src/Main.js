//this imports the react library/framework
import React, {Component} from 'react';
//this inserts our card body from the card component file
import Card from './Card';
//creating the main component
class Main extends Component {
    constructor(props) {
        super(props);
        this.state ={
            pictureArray:['https://i.pinimg.com/originals/88/fb/09/88fb091a6572c71ccbb70d564981ac30.gif', 'https://i.pinimg.com/originals/05/fc/b7/05fcb7eb64f37a81e75005b646f3a91a.jpg'],
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