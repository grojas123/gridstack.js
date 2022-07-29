// This example is a simpler demo to demostrate how use the hook with React 18.2.0 and gridstack.js
// Is a demo how you can setup the hook and how update the grid after the app started .

import React, {useEffect} from "react";

import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.css';

import "./App.css";

function App() {
    let serializedData = [
        {x: 0, y: 0, w: 1, h: 1,autoPosition:false,content: 'item 1'},
        {x: 0, y: 2, w: 1,h: 1,autoPosition:false, content: 'item 2'},
        {x: 0, y: 3,w:1,h: 1,autoPosition:false,content: 'item 3'}
    ];

    useEffect(() => {
        var grid = GridStack.init();

    });


function onClick(){
    var grid = GridStack.init();
    grid.removeAll()
    console.log("run useEffect")
    grid.load(serializedData)

}
    function onClickv2(){
        var grid = GridStack.init();
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
