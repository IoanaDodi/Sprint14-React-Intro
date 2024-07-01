import "./TaskContainer.css";

function TaskContainer(props) {
    return (
        <div className="card-content">
            <p>{props.name}</p>
        </div>
    );
}

export default TaskContainer;
