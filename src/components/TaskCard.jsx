import React, { useState } from 'react'
import TaskForm from './TaskForm';

function TaskCard({task,deleteTask,updateTask}) {
    const [isUpdate, setIsUpdate] = useState(false);

    const handleDelete = () => {
        deleteTask(task.id);
    }
    const handleUpdateClick = () => {
        setIsUpdate(true);
    }

    const handleSubmit = (id,title,description,important) => {
        setIsUpdate(false);
        updateTask(id,title,description,important)
    }
    
  return (
    <div className="card-container">
        {
            isUpdate ? <TaskForm updateSubmit={handleSubmit} task={task}/> : <div className='task-card'>
            <div className="card-group">
                <h3 className='card-title'>Title</h3>
                <p className='card-text'>{task.title}</p>
            </div>
            <div className="card-group">
                <h3 className='card-title'>Description</h3>
                <p className='card-text'>{task.description}</p>
            </div>
            <div className="card-group">
                <h3 className='card-title'>Important</h3>
                <p className='card-text'>{task.important ? "Important" : "Normal"}</p>
            </div>
            <div className="card-group">
                <button className='update-button' onClick={handleUpdateClick}>Update</button>
                <button className='delete-button' onClick={handleDelete}>Delete</button>
            </div>
        </div>
        }
    
    </div>
  )
}

export default TaskCard