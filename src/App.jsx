import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "./store/authSlice";
import { fetchTasks } from "./store/taskSlice";
import TaskList from "./components/Tasks/TaskList";
import TaskInput from "./components/Tasks/TaskInput";
import Navbar from "./components/NavBar/Navbar";
import Sidebar from "./components/NavBar/Sidebar";
import { toggleTheme } from "./store/themeSlice";
import { FiBell, FiRefreshCw, FiCalendar } from "react-icons/fi"; // Import the icons from react-icons

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { mode } = useSelector((state) => state.theme);
  const tasks = useSelector((state) => state.tasks.tasks); // Updated to access tasks properly

  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Keep sidebar open initially

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    dispatch(checkAuth());
    if (isAuthenticated) {
      dispatch(fetchTasks());
    }
  }, [dispatch, isAuthenticated]);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div
      className={`min-h-screen flex flex-col ${
        mode === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-black"
      }`}
    >
      {/* Navbar at the top */}
      <Navbar toggleSidebar={toggleSidebar} onThemeToggle={handleThemeToggle} />

      {/* Main Content - Sidebar and To-Do Section */}
      <div className="flex-1 flex flex-row">
        {/* Sidebar */}
        {isSidebarOpen && (
          <div className="w-1/4 h-full">
            <Sidebar tasks={tasks} />
          </div>
        )}

        {/* To-Do Section */}
        <div className="flex-1 p-8">
          {/* Title with Thin Line */}
          <h2 className="text-3xl font-bold mb-2">To-Do List</h2>
          <hr className="border-t-2 border-gray-300 mb-6" />

          {/* Task Input */}
          <TaskInput />

          {/* Icons (Bell, Loop, Calendar) */}
          <div className="flex space-x-4 mb-6">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 shadow-sm">
              {/* Bell Icon */}
              <FiBell className="text-gray-600 text-xl" />
            </button>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 shadow-sm">
              {/* Loop (Refresh) Icon */}
              <FiRefreshCw className="text-gray-600 text-xl" />
            </button>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 shadow-sm">
              {/* Calendar Icon */}
              <FiCalendar className="text-gray-600 text-xl" />
            </button>
          </div>

          {/* Task List */}
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;
