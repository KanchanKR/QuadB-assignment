/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { FiPlus } from 'react-icons/fi';

const Sidebar = ({ tasks }) => {
  return (
    <div className="h-full bg-[#EEF6EF] mt-4 rounded-lg p-4 shadow-lg"> {/* Outer box with margin top, padding, and rounded corners */}
      {/* Profile Section */}
      <div className="relative w-full flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
        <div className="w-20 h-20 rounded-full bg-gray-300 border-4 border-[#EEF6EF] absolute top-[-40px]"></div>
        <div className="mt-12 text-center">
          <p className="font-bold text-lg">Hey,</p>
          <p className="text-sm font-semibold">John Doe</p>
        </div>
      </div>

      {/* Task List Section */}
      <div className="w-full bg-[#FBFDFC] mt-8 p-4 rounded-lg shadow-md">
        <ul className="space-y-4">
          <li className="font-semibold text-gray-700 cursor-pointer">All Tasks</li>
          <li className="font-semibold text-gray-700 cursor-pointer">Today</li>
          <li className="font-semibold text-gray-700 cursor-pointer">Important</li>
          <li className="font-semibold text-gray-700 cursor-pointer">Planned</li>
          <li className="font-semibold text-gray-700 cursor-pointer">Assigned to Me</li>
        </ul>
      </div>

      {/* Add List Section */}
      <div className="w-full bg-[#FBFDFC] mt-4 p-4 rounded-lg shadow-md flex items-center justify-between">
        <p className="font-semibold text-gray-700">Add List</p>
        <FiPlus className="text-gray-700 text-xl cursor-pointer" />
      </div>

      {/* Today Tasks Section */}
      <div className="w-full bg-[#FBFDFC] mt-4 p-4 rounded-lg shadow-md">
        <p className="font-semibold text-gray-700 mb-4">Today's Tasks</p>
        <div className="flex items-center justify-between">
          {/* Placeholder for additional content */}
          {/* You can add the task completion circle and task info here as needed */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
