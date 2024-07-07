import "./App.css";
import TaskCard from "./components/task-card/TaskCard";

function App() {

    const data = [
      {
        id : "T-1",
        status : "Todo",
        name : "Create a Design System for Enum Workspace.",
        dueDate : new Date(2024, 5, 30)
      },
      {
        id : "T-2",
        status : "In Progress",
        name : "Create a Design System for Enum Workspace.",
        dueDate : new Date(2024, 6, 30)
      },
      {
        id : "T-3",
        status : "Completed",
        name : "Create a Design System for Enum Workspace.",
        dueDate : new Date(2024, 7, 30)
      },
      {
        id : "T-4",
        status : "Done",
        name : "Create a Design System for Enum Workspace.",
        dueDate : new Date(2024, 8, 30)
      },
      {
        id : "T-5",
        status : "In Progress",
        name : "Create a Design System for Enum Workspace.",
        dueDate : new Date(2024, 9, 30)
      },
      {
        id : "T-6",
        status : "Done",
        name : "Create a Design System for Enum Workspace.",
        dueDate : new Date(2024, 10, 30)
      },
      {
        id : "T-7",
        status : "Completed",
        name : "Create a Design System for Enum Workspace.",
        dueDate : new Date(2024, 11, 30)
      },
    ];

  return (
    <div className="app-container">
      {data.map((item) => {
               return <TaskCard id={item.id} status={item.status} name={item.name} dueDate={item.dueDate} />;
            })}
    </div>
  )
}

export default App;