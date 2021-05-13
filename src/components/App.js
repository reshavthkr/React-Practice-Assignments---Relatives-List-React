import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(){
        super();
        this.relativelist = [
            {name: 'Relative1'},
            {name: 'Relative2'},
            {name: 'Relative3'} 
        ]
    }
    render() {

        return(
            <div id="main">
                <ol>
                    {
                    this.relativelist.map((data, i) => {
                        
                        return <li key={i}>{data.name}</li>;
                    })
                    }
                </ol>
            </div>
        )
    }
}


export default App;
