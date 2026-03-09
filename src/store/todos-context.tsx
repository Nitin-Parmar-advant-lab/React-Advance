import { createContext, useState } from "react";
import Todo from "../models/todo";

type TodoContexObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
}

export const TodosContext = createContext<TodoContexObj>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<{ children: React.ReactNode }> = (
    props,
) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addToDoHandler = (text: string) => {
        const newTodo = new Todo(text);

        setTodos((prevTodos) => {
            return prevTodos.concat(newTodo);
        });
    };

    const removeTodoHandler = (todoId: string) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== todoId);
        });
    };

    const contextValue: TodoContexObj = {
        items: todos,
        addTodo: addToDoHandler,
        removeTodo: removeTodoHandler,
    };

    return (
        <TodosContext.Provider value={contextValue}>
            {props.children}
        </TodosContext.Provider>
    );
};


export default TodosContextProvider;