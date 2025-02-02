import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import TodoItem from "./components/TodoItem";

const TodoApp = () => {
  //states
  const [todoItems, settodoItems] = useState([]);
  const [newTodo, setnewTodo] = useState("");

  //funtions

  const addTodo = () => {
    const myNewTodo = {
      id: new Date().getTime(),
      title: newTodo,
      completed: false,
    };
    const newArray = [myNewTodo, ...todoItems];
    settodoItems(newArray);
    setnewTodo("");
  };

  const markTodoAsCompleted = (todoId) => {
    console.log("i got this todo : ", todoId);
    const editedArr = todoItems.map((item) => {
      if (item.id === todoId) {
        return {
          id: item.id,
          title: item.title,
          completed: !item.completed,
        };
      } else {
        return item;
      }
    });
    settodoItems(editedArr);
  };

  const deleteThisTodo = (todoId) => {
    const filteredArray = todoItems.filter((item) => item.id != todoId);
    settodoItems(filteredArray);
  };

  const setTodosInLocalStorage = () => {
    const myTodos = JSON.stringify(todoItems);
    localStorage.setItem("todoList", myTodos);
  };

  useEffect(() => {
    const localStorageItems = localStorage.getItem("todoList");
    const localStorageItemsParsed = JSON.parse(localStorageItems);
    settodoItems(localStorageItemsParsed);
  }, []);

  useEffect(() => {
    setTodosInLocalStorage();
  }, [todoItems]);

  return (
    <div className="h-screen w-screen bg-amber-200 flex items-center justify-center">
      <div className="flex flex-col gap-[30px] bg-white w-[50vw] p-4 shadow min-h-[50vh] max-h-[85vh]">
        <h2 className="text-4xl font-bold text-center">Todo List</h2>

        <div className="flex gap-[10px] items-center">
          <input
            value={newTodo}
            onChange={(e) => {
              setnewTodo(e.target.value);
            }}
            type="text"
            className="w-full border border-gray-600 outline-none p-3"
          />
          {newTodo.length > 2 ? (
            <div
              onClick={addTodo}
              className="cursor-pointer flex items-center justify-center p-[10px] bg-green-400"
            >
              <FaPlus size={30} />
            </div>
          ) : null}
        </div>
        <div className="flex flex-col gap-[5px] max-h-[40vh] overflow-auto">
          {todoItems.map((item, index) => (
            <TodoItem
              todoItem={item}
              key={index}
              markTodoAsCompleted={markTodoAsCompleted}
              deleteThisTodo={deleteThisTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
