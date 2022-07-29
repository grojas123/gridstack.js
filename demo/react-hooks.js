import React, {useEffect} from "react";

import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.css';
import 'gridstack/dist/gridstack-extra.css';
import "./App.css";

function App() {
    let serializedData = [
        {x: 1, y: 0, w: 1, h: 1,autoPosition:false,content: 'item 1'},
        {x: 0, y: 2, w: 1,h: 1,autoPosition:false, content: 'item 2'},
        {x: 0, y: 3,w:1,h: 1,autoPosition:false,content: 'item 3'}
    ];

    useEffect(() => {
        var grid = GridStack.init({column: 10,maxRow:10});

    });


function onClick(){
    var grid=document.querySelector('.grid-stack').gridstack;
    grid.removeAll()
    grid.load(serializedData)

}
    function onClickv2(){
        let grid=document.querySelector('.grid-stack').gridstack;
        
        grid.addWidget({x: 0, y: 4,w:1,h: 1,content: 'item 4'});
        grid.addWidget({x: 0, y: 5,w:1,h: 1,content: 'item 5'});
        

    }
 
    return (
        <div className="App">
            {<button onClick={()=>onClick()}>Click me</button>}
            {<button onClick={()=>onClickv2()}>Click me more</button>}
            <div className="grid-stack">

            </div>
        </div>

    );
}

export default App;