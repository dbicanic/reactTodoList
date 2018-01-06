import React from "react";
import ReactDOM from "react-dom";
import FlipMove from 'react-flip-move';
import "./index.css";
import ToDoList from "./ToDoList";

var destination = document.querySelector("#container");

ReactDOM.render(
	<div>
    	<ToDoList/>
    </div>,
    destination
);
