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
      {data.map((item, i) => {
               return <TaskCard id={data[i].id} status={data[i].status} name={data[i].name} dueDate={data[i].dueDate} />;
            })}
      {/* <TaskCard 
        id = {data[0].id}
        status = {data[0].status}
        name = {data[0].name}
        dueDate = {data[0].dueDate}
      />
      <TaskCard 
        id = {data[1].id}
        status = {data[1].status}
        name = {data[1].name}
        dueDate = {data[1].dueDate}
      />
      <TaskCard 
        id = {data[2].id}
        status = {data[2].status}
        name = {data[2].name}
        dueDate = {data[2].dueDate}
      />
      <TaskCard 
        id = {data[3].id}
        status = {data[3].status}
        name = {data[3].name}
        dueDate = {data[3].dueDate}
      />
      <TaskCard 
        id = {data[4].id}
        status = {data[4].status}
        name = {data[4].name}
        dueDate = {data[4].dueDate}
      />
      <TaskCard 
        id = {data[5].id}
        status = {data[5].status}
        name = {data[5].name}
        dueDate = {data[5].dueDate}
      />
      <TaskCard 
        id = {data[6].id}
        status = {data[6].status}
        name = {data[6].name}
        dueDate = {data[6].dueDate}
      /> */}
    </div>
  )
}

export default App;