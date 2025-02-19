import { useState } from "react";

function ToDoList() {
    const [todoList, setTodoList] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleAddTodo = () => {
        if (inputValue.trim() !== "") {
            setTodoList([...todoList, inputValue]);
            setInputValue("");
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Tambah Item"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" onClick={handleAddTodo}>Tambah</button>
            <ol>
                {todoList.map((item, idx) => (
                    <li key={idx}>
                        {item} 
                        <button onClick={() => setTodoList(todoList.filter((_, index) => index !== idx))}>
                            Hapus
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ToDoList;
