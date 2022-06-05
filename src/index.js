// import sum from "./sum.js";

import React from "react";
import ReactDOM from "react-dom";
import ("./index.css");
import img from "./icon-square-big.png";


// let h1 = document.createElement('h1');
// h1.textContent="Hello World";

// h1.classList.add("red-font");

// document.getElementById('root').append(h1);
// console.log(sum(5,15));



// let div = React.createElement("div",{},[
//     React.createElement("h1",{className:"red-font"},"Hello World"),
//     React.createElement("p",{},"Welcome")
// ]);

// let h1 = React.createElement("h1",{className:"red-font"},"Hello World");

let image = React.createElement("img",{src:img});

ReactDOM.render(<>{image}
<input type="textarea" id="note" placeholder="Create a Note"/>
<button onClick={textDisplay}>Add Note</button></>, 
document.getElementById('root'));

function textDisplay(){
    console.log("Hello");
    let text = document.querySelector('#note').value;
    let para =document.createElement('p');
    para.textContent=text;

    document.getElementById('root').append(para);
    document.querySelector('#note').value="";
}