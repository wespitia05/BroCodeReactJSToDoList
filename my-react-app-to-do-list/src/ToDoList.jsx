import React, {useState} from "react";

function ToDoList() {
    // tasks will be an array of strings with a setter function
    // initial state of tasks will be an empty array
    const [tasks, setTasks] = useState(["Eat Breakfast", "Take a Shower", "Walk the Dog"]);
    // new tasks will be an array of strings with a setter function
    // initial state of new tasks will be an empty string
    // this will handle each individual new task added
    const [newTask, setNewTasks] = useState("");

    // this function will handle any changes made in the input textbox
    // parameter is event so we can target the value in the textbox
    function handleInputChange(event) {
        setNewTasks(event.target.value);
    }

    // this function will handle any tasks being added into the to do list
    function addTask() {

    }

    // this function will handle deleting any tasks
    // parameter will be an index of the list item we would like to delete
    function deleteTask(index) {

    }

    // this function will handle moving a task up on the list
    // parameter will be an index of the list item we would like to move up
    function moveTaskUp(index) {

    }

    // this function will handle moving a task down on the list
    // parameter will be an index of the list item we would like to move down
    function moveTaskDown(index) {

    }
    
    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input 
                    type="text" 
                    placeholder="Enter a Task..." 
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button className="add-button" onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((tasks, index) => 
                    <li key={index}>
                        <span className="text">{tasks}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="move-button" onClick={() => moveTaskUp(index)}>⬆</button>
                        <button className="move-button" onClick={() => moveTaskDown(index)}>⬇</button>
                    </li>
                )}
            </ol>
        </div>
    );
}

export default ToDoList