import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(){
        super();
        this.relativelist = [
            {name: 'Relative1', id : 1},
            {name: 'Relative2', id : 2},
            {name: 'Relative3', id : 3} 
        ]
    }
    render() {

        return(
            <div id="main">
                <ol key="relativeList">
                    {
                    this.relativelist.map((data, i) => {
                        return <li key={`relativeListItem${data.id}`}>{data.name}</li>;
                    })
                    }
                </ol>
            </div>
        )
    }
}


export default App;
