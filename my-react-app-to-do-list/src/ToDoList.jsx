import React, {useState} from "react";

function ToDoList() {
    // tasks will be an array of strings with a setter function
    // initial state of tasks will be an empty array
    const [tasks, setTasks] = useState([]);
    // new tasks will be an array of strings with a setter function
    // initial state of new tasks will be an empty string
    // this will handle each individual new task added
    const [newTask, setNewTasks] = useState("");

    return(
        <p>hello</p>
    );
}

export default ToDoList