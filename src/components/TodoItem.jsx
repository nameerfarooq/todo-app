/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { TiTick } from "react-icons/ti";
import { MdDeleteForever } from "react-icons/md";
import { BiUndo } from "react-icons/bi";
// eslint-disable-next-line react/prop-types
const TodoItem = ({ todoItem, markTodoAsCompleted, deleteThisTodo }) => {
  console.log("I AM TODO ITEM : ", todoItem);
  return (
    <div
      className={`flex justify-between items-center ${
        todoItem?.completed === true ? "bg-green-600" : "bg-amber-200"
      }  py-[20px] px-[40px] rounded-md shadow-md`}
    >
      <p className="font-bold">{todoItem?.title}</p>
      <div className="flex items-center gap-[10px]">
        <div
          onClick={() => {
            markTodoAsCompleted(todoItem?.id);
          }}
          className={`cursor-pointer flex ${todoItem.completed ? "bg-white" : "bg-green-900"}  w-[40px] h-[40px] justify-center items-center rounded-full`}
        >
          {todoItem.completed ? (
            <BiUndo color="red" size={35} />
          ) : (
            <TiTick color="white" size={40} />
          )}
        </div>
        <div
          onClick={() => {
            deleteThisTodo(todoItem?.id);
          }}
          className="cursor-pointer flex bg-red-900 w-[40px] h-[40px] justify-center items-center rounded-full"
        >
          <MdDeleteForever color="white" size={35} />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
