import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Navbar from "./components/Navbar";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const handleAdd = () => {
    setTodos([...todos, {id: uuidv4(), todo, iscompleted: false }]);
    setTodo("");
    console.log(todos);
  };
  const handleDelete = () => {

  };
  const handleEdit = () => {

  };
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleCheckbox = (e) => {
    let id = e.target.name
    let index = todos.findIndex(item=>{
      return item.id === id
    })
    let newTodos = [...todos]
    newTodos[index].iscompleted =! newTodos[index].iscompleted;
    setTodos(newTodos)
  }
  
  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl bg-violet-200 p-5 min-h-[80vh]">
        <div className="addTodo my-5">
          <h2 className="text-lg font-bold">Add a Todo</h2>
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            className=" w-1/2"
          />
          <button
            onClick={handleAdd}
            className=" bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-6"
          >
            Add
          </button>
        </div>
        <h2 className=" text-lg font-bold">your todos</h2>
        <div className="todos">
          {todos.map((item) => {
            return (
              <div key={item.id} className="todo flex w-1/4 my-3">
                <input name={item.id} onChange={handleCheckbox} type="checkbox" value={todo} id="" />
                <div className={item.iscompleted ? "line-through" : ""}>
                  {item.todo}
                </div>
                <div className="buttons">
                  <button
                    onClick={handleEdit}
                    className=" bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
                  >
                    Edit
                  </button>
                  <button
                    onClick={handleDelete}
                    className=" bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
