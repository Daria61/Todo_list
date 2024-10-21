import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  const savedTodos = localStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos) : [];
};

const saveToLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

export const listSlice = createSlice({
  name: "list",
  initialState: loadFromLocalStorage(),
  reducers: {
    addTodo: (state, action) => {
      const { id, text, status, priority, due_date } = action.payload;
      state.push({
        id: id,
        text: text,
        status: status,
        priority: priority,
        due_date: due_date,
      });
      saveToLocalStorage(state);
    },
    editTodo: (state, action) => {
      const { id, text, status, priority, due_date } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
        todo.status = status;
        todo.priority = priority;
        todo.due_date = due_date;
      }
      saveToLocalStorage(state);
    },
    deleteTodo: (state, action) => {
      // return state.filter((todo) => todo.id !== action.payload);
      const updatedState = state.filter((todo) => todo.id !== action.payload);
      saveToLocalStorage(updatedState);
      return updatedState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, editTodo } = listSlice.actions;

export default listSlice.reducer;
