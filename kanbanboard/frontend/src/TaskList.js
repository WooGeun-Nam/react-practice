import React from 'react';
import Task from './Task';

const TaskList = ({cardNo, tasks, callback}) => {
    return (
        <div>
            <ul>
                {
                    tasks.map(task => <Task 
                                        cardNo={cardNo}
                                        key={task.no}
                                        no={task.no}
                                        name={task.name}
                                        done={task.done}
                                        callback={callback}/>) 
                }
            </ul>
        </div>
    );
};

export default TaskList;