import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import { fetchTasks } from '../../store/taskSlice';  // Import the fetchTasks action

function TaskList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);  // Access the tasks array from Redux state
  const status = useSelector((state) => state.tasks.status);  // Access the loading status
  const error = useSelector((state) => state.tasks.error);  // Access any errors

  useEffect(() => {
    dispatch(fetchTasks());  // Dispatch the action to fetch tasks from the API when the component mounts
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading tasks...</div>;  // Show a loading message while tasks are being fetched
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;  // Display any errors if the API request fails
  }

  if (!tasks.length) {
    return <div>No tasks available.</div>;  // Show a message if there are no tasks
  }

  return (
    <ul className="bg-gray-50 p-4 rounded-md shadow-md">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />  // Render each task using the TaskItem component
      ))}
    </ul>
  );
}

export default TaskList;
