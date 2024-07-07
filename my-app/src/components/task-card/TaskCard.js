import "./TaskCard.css";
import Badge from "../badge/Badge";
import DateContainer from "../date-container/DateContainer";
import TaskContainer from "../task-container/TaskContainer";

function TaskCard(props) {

    return (
        <div className="card-wrapper">
            <div className="card-header">
                <p>{props.id}</p>
                <Badge status={props.status}/>
            </div>
            <TaskContainer name={props.name} />
            <div className="card-footer">
                <DateContainer dueDate={props.dueDate}/>
            </div>
        </div>
    );
}

export default TaskCard;