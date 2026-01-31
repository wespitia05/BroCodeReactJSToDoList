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
        // checks to see if input is empty, if not continue normally with adding task
        if(newTask.trim() !== "") {
            // use updater function to keep previous tasks and add new task on top
            setTasks(prevTasks => [...prevTasks, newTask]);
            // clear input element
            setNewTasks("");
        }
    }

    // this function will handle deleting any tasks
    // parameter will be an index of the list item we would like to delete
    function deleteTask(index) {
        // use filter method to remove the task
        // if current index of i is strictly not equal to index we want to delete, put in new array of updated tasks
        // if they match, filter it out bc we dont want it
        const updatedTasks = tasks.filter((_, i) => i !== index);
        // set new tasks equal to updated tasks thats missing one element that we filter out
        setTasks(updatedTasks);
    }

    // this function will handle moving a task up on the list
    // parameter will be an index of the list item we would like to move up
    function moveTaskUp(index) {
        // check if index is already at the top of the list, no need to move it up further
        if(index > 0) {
            // create array of updated tasks = to spread of current tasks
            const updatedTasks = [...tasks];
            // swaps the task you wanna move up with the one thats already above it
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            // set tasks to updated array
            setTasks(updatedTasks);
        }
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