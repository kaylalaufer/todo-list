import React, {useState} from "react";

function TodoApp() {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    };
}