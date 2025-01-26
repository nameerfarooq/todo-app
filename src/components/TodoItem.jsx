// eslint-disable-next-line react/prop-types
import { TiTick } from "react-icons/ti";
import { MdDeleteForever } from "react-icons/md";
// eslint-disable-next-line react/prop-types
const TodoItem = ({ title }) => {
  return (
    <div className="flex justify-between items-center bg-amber-200 py-[20px] px-[40px] rounded-md shadow-md">
      <p className="font-bold">{title}</p>
      <div className="flex items-center gap-[10px]">
        <div className="cursor-pointer flex bg-green-900 w-[40px] h-[40px] justify-center items-center rounded-full">
          <TiTick color="white" size={40} />
        </div>
        <div className="cursor-pointer flex bg-red-900 w-[40px] h-[40px] justify-center items-center rounded-full">
          <MdDeleteForever color="white" size={35} />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
