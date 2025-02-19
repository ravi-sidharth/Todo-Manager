import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: JSON.parse(localStorage.getItem('todos')) || [],
  editingIndex: -1,
  filterTodos: JSON.parse(localStorage.getItem('filterTodos')) || []
}

export const todoReducers = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // Add task in todos
      state.todos.unshift(action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
      
      // Add task in filter todos
      state.filterTodos.unshift(action.payload);
      localStorage.setItem('filterTodos', JSON.stringify(state.filterTodos));
    },

    deleteTodo: (state, action) => {
      // delete task in todos
      state.todos = state.todos.filter(todo => todo._id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));

      // delete task in filter todos
      state.filterTodos = state.filterTodos.filter(todo => todo._id !== action.payload);
      localStorage.setItem('filterTodos', JSON.stringify(state.filterTodos));
    },
    statusTodo: (state, action) => {
      const { taskStatus, id } = action.payload

      // task status in todos
      state.todos = state.todos.map((todo) => todo._id == id ? { ...todo, status: taskStatus || todo.status } : todo);
      localStorage.setItem('todos', JSON.stringify(state.todos));

      // task status in filter todos
      state.filterTodos = state.filterTodos.map((todo) => todo._id == id ? { ...todo, status: taskStatus || todo.status } : todo);
      localStorage.setItem('filterTodos', JSON.stringify(state.filterTodos));
    },
    editingTodo: (state, action) => {
      const { editingIndex, newTitle, newDescription, newPriority } = action.payload;
      // todo edit task 
      state.todos = state.todos.map((todo, index) => {
        if (index === editingIndex) {
          return {
            ...todo,
            title: newTitle || todo.title,
            description: newDescription || todo.description,
            priority: newPriority || todo.priority,
          };
        }
        return todo;
      });
      localStorage.setItem('todos', JSON.stringify(state.todos));

      // filter edit task 
      state.filterTodos = state.filterTodos.map((todo, index) => {
        if (index === editingIndex) {
          return {
            ...todo,
            title: newTitle || todo.title,
            description: newDescription || todo.description,
            priority: newPriority || todo.priority,
          };
        }
        return todo;
      });
      localStorage.setItem('filterTodos', JSON.stringify(state.filterTodos));
    },

    AllTask: (state, action) => {
      state.filterTodos = state.todos.filter(()=> "All" === action.payload)
      localStorage.setItem('filterTodos', JSON.stringify(state.filterTodos))
    },

    priorityWiseTaskFilter: (state, action) => {
      state.filterTodos = state.todos.filter((todo)=>todo.priority === action.payload)
      localStorage.setItem('filterTodos', JSON.stringify(state.filterTodos))
    },

    statusWiseTaskFilter: (state,action)=> {
      state.filterTodos = state.todos.filter(todo=>todo.status === action.payload)
      localStorage.setItem('filterTodos',JSON.stringify(state.filterTodos))
    }

  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, statusTodo, editingTodo, priorityWiseTaskFilter, statusWiseTaskFilter,AllTask } = todoReducers.actions

export default todoReducers.reducer