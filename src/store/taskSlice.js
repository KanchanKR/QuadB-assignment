import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunk for fetching tasks (example: fetch tasks from an API)
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await fetch('http://localhost:7000/todos');  // Replace with your actual API endpoint
  const data = await response.json();
  return data;  // Assuming the response is an array of tasks
});

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],  // List of tasks
    status: 'idle',  // To track loading state
    error: null,  // To track any errors
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ id: Date.now(), text: action.payload, completed: false });
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tasks = action.payload;  // Update tasks array with data from the API
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addTask, toggleTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
