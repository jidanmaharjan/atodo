import React from "react";

const Todos = ({
  addNewTodo,
  newTodoRef,
  changeFilter,
  filter,
  filteredTodos,
  editTodoTitle,
  toggleTodo,
  editHandler,
  deleteHandler,
  saveHandler,
  editTodoNum,
  setUser,
}) => {
  return (
    <div className=" bg-green-400 w-full min-h-screen p-4 flex flex-col ">
      <button
        className="fixed bottom-4 right-4 z-50 bg-red-400 p-2 rounded-sm text-white"
        onClick={() => {
          localStorage.removeItem("user");
          setUser(null);
        }}
      >
        Logout?
      </button>
      <form
        action=""
        className="bg-gray-100 p-4 rounded-sm flex "
        onSubmit={addNewTodo}
      >
        <input
          ref={newTodoRef}
          className="p-2 outline-none flex-grow"
          type="text"
          placeholder="Enter Todo"
        />
        <button
          className="bg-green-400 p-2 text-white rounded-sm ml-4"
          type="submit"
        >
          Create Todo
        </button>
      </form>
      <div className="mt-4 bg-gray-100 flex-grow p-4 rounded-sm">
        <div className="flex justify-between mb-2">
          <h1 className="uppercase ">Todolist</h1>
          <div className="flex">
            <h1>Filter:</h1>
            <button
              className="underline bg-blue-300 px-2 text-white rounded-full ml-4"
              onClick={changeFilter}
            >
              {filter}
            </button>
          </div>
        </div>
        <div className="overflow-y-scroll max-h-[28rem]">
          {filteredTodos.map((todo, index) => {
            if (editTodoNum !== todo.id) {
              return (
                <div
                  key={index}
                  className="flex items-center mb-2 odd:bg-gray-200 px-2"
                >
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={todo.status}
                    onChange={() => toggleTodo(todo.id)}
                  />
                  <input
                    id={todo.id}
                    className="flex-grow ml-2 p-2 outline-none bg-transparent"
                    value={todo.todo}
                    readOnly={true}
                  />
                  <button
                    className="bg-blue-400 px-2 py-1 rounded-sm mx-2 text-white"
                    onClick={() => editHandler(todo.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-400 px-2 py-1 rounded-sm mx-2 text-white"
                    onClick={() => deleteHandler(todo.id)}
                  >
                    Delete
                  </button>
                </div>
              );
            } else {
              return (
                <div
                  key={index}
                  className="flex items-center mb-2 odd:bg-gray-200"
                >
                  <input
                    id={todo.id}
                    className="flex-grow ml-2 p-2 outline-none bg-transparent border border-gray-300"
                    value={todo.todo}
                    readOnly={false}
                    onChange={(e) =>
                      editTodoTitle({ id: todo.id, name: e.target.value })
                    }
                  />
                  <button
                    className="bg-blue-400 px-2 py-1 rounded-sm mx-2 text-white"
                    onClick={() => saveHandler(todo.id)}
                  >
                    Save
                  </button>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Todos;
