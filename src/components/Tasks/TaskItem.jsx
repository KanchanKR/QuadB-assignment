/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../../store/taskSlice';

function TaskItem({ task }) {
  const dispatch = useDispatch();

  if (!task || typeof task !== 'object') {
    return <div>Invalid task data.</div>;
  }

  return (
    <div className="flex justify-between items-center p-4 bg-white mb-2 shadow-md rounded-md">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="mr-2"
          checked={task.completed}
          onChange={() => dispatch(toggleTask(task.id))}
        />
        <span className={task.completed ? 'line-through text-gray-500' : 'text-black'}>
          {task.text}
        </span>
      </div>
      <button
        onClick={() => dispatch(deleteTask(task.id))}
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200"
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;
