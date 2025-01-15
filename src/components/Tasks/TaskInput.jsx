import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../store/taskSlice';

function TaskInput() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTask(text));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task"
        className="flex-1 border p-2 rounded-md"
      />
      <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md">
        Add Task
      </button>
    </form>
  );
}

export default TaskInput;
