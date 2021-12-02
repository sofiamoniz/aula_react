import React, {useEffect, useState} from 'react';

function TODOList(){
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = React.useState(null);

    const addNewTask = () => {
        setTasks([...tasks, newTask]);
    };

    const removeTask = (entry) => {
        setTasks(tasks.filter(item => item !== entry));
    };

    const checkTasks = () => {
        if(tasks.length){
            return( 
                <div>
                    {tasks.map(entry =>
                        <div className="container">
                            <div className="row" style={{marginTop:"5%"}}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-6">
                                        <p>{entry}</p>
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="button" value="Delete" name={entry} onClick={() => removeTask(entry)}/>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    )}
                </div>
            )
        }
        else{
            return(
                <p style={{marginTop:"5%"}}>Nothing to do!</p>
                )
        }
    }

    return (
        <div>
            <h1>Your TODO list</h1>
            <div className="container">
                <div className="row" style={{marginTop:"5%"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <input type="text" className="form-control input-normal" placeholder="insert new task" value={newTask} onChange={(event) => setNewTask(event.target.value)} />
                            </div>
                            <div className="col-sm-6">
                                <input type="button" onClick={addNewTask} value="Add" />
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
            {checkTasks()}
        </div>
    );
}

export default TODOList;