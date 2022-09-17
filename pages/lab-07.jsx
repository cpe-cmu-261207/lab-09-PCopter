import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Todolist from "../components/Todolist";

export default function Lab07() {
  const [Todotext, setTodotext] = useState("");
  const [Todos, setTodos] = useState([]);
  const onKeyUpHandler = (e) => {
    if (e.key !== "Enter") return;
    else {
      if (Todotext === "") alert("Todo cannot be empty");
      else {
        const newTodos = [{ title: Todotext, completed: false }, ...Todos];
        setTodos(newTodos);
        setTodotext("");
      }
    }
  };

  useEffect(() => {
    const todoStr = localStorage.getItem("react-todos");
    if (todoStr === null) setTodos([]);
    else setTodos(JSON.parse(todoStr));
  }, []);

  const [isFirstRander, setIsFirstRender] = useState(true);
  useEffect(() => {
    if (isFirstRander) {
      setIsFirstRender(false);
      return;
    }
    saveTodos();
  }, [Todos]);

  const saveTodos = () => {
    const todosStr = JSON.stringify(Todos);
    localStorage.setItem("react-todos", todosStr);
  };

  const deleteTodo = (idx) => {
    Todos.splice(idx, 1);
    const newtodos = [...Todos];
    setTodos(newtodos);
  };
  const markTodo = (idx) => {
    Todos[idx].completed = !Todos[idx].completed;
    setTodos([...Todos]);
  };
  const moveUp = (idx) => {
    if (idx === 0) return;
    const title = Todos[idx].title;
    const completed = Todos[idx].completed;

    Todos[idx].title = Todos[idx - 1].title;
    Todos[idx].completed = Todos[idx - 1].completed;

    Todos[idx - 1].title = title;
    Todos[idx - 1].completed = completed;
    setTodos([...Todos]);
  };

  const moveDown = (idx) => {
    if (idx === Todos.length - 1) return;
    const title = Todos[idx].title;
    const completed = Todos[idx].completed;

    Todos[idx].title = Todos[idx + 1].title;
    Todos[idx].completed = Todos[idx + 1].completed;

    Todos[idx + 1].title = title;
    Todos[idx + 1].completed = completed;
    setTodos([...Todos]);
  };
  return (
    <div>
      <Navbar />
      {/* Entire App container (required for centering) */}
      <div style={{ maxWidth: "700px" }} className="mx-auto">
        {/* App header */}
        <p className="display-4 text-center fst-italic m-4">
          Minimal Todo List <span className="fst-normal">☑️</span>
        </p>
        {/* Input */}
        <input
          className="form-control mb-1 fs-4"
          placeholder="insert todo here..."
          onKeyUp={onKeyUpHandler}
          onChange={(event) => setTodotext(event.target.value)}
          value={Todotext}
        />

        {/* Todos */}

        {Todos.map((todo, i) => (
          <Todolist
            title={todo.title}
            completed={todo.completed}
            key={i}
            onDelete={() => deleteTodo(i)}
            onMark={() => markTodo(i)}
            onMoveUp={() => moveUp(i)}
            onMoveDown={() => moveDown(i)}
          />
        ))}

        {/* summary section */}
        <p className="text-center fs-4">
          <span className="text-primary">All ({Todos.length}) </span>
          <span className="text-warning">
            Pending ({Todos.filter((x) => x.completed === false).length})
          </span>
          <span className="text-success">
            Completed ({Todos.filter((x) => x.completed === true).length})
          </span>
        </p>

        {/* Made by section */}
        <p className="text-center mt-3 text-muted fst-italic">
          made by Phanuwat Wongworrakulkit 640610660
        </p>
      </div>
    </div>
  );
}
