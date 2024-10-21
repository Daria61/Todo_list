import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "list",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload.text,
        status: action.payload.status,
        priority: action.payload.priority,
        due_date: action.payload.due_date,
      });
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
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, editTodo, toggleComplete } =
  listSlice.actions;

export default listSlice.reducer;
