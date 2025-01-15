# To-Do List App

[**Live Demo**](https://todoapp-kkr.netlify.app/)

This is a simple To-Do List application built with **React**, **Redux Toolkit**, and **Tailwind CSS**. The application allows users to add, toggle, and delete tasks. It fetches tasks from an external API and displays them on the user interface. The app supports both dark and light themes and includes a sidebar and navbar for a better user experience.

## Features

- Add, toggle, and delete tasks.
- Fetch tasks from an external API.
- Responsive design with light and dark modes.
- Sidebar with navigational links and icons.
- Task input field to add new tasks.

## Technologies Used

- **React** (for building UI components)
- **Redux Toolkit** (for state management)
- **Tailwind CSS** (for styling)
- **React Icons** (for icons)
- **Fetch API** (for fetching tasks from an API)

## Installation

Follow these steps to get the app up and running on your local machine.

### Prerequisites

Ensure you have the following tools installed:

- Node.js
- npm (or yarn)

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/todo-app.git
    ```

2. Navigate to the project directory:
    ```bash
    cd todo-app
    ```

3. Install the dependencies:
    ```bash
    npm install
    # or if you're using yarn:
    yarn install
    ```

4. Start the development server:
    ```bash
    npm start
    # or with yarn:
    yarn start
    ```

5. The app will be available at [http://localhost:3000](http://localhost:5173).

## Folder Structure

```bash
src/
├── components/
│   ├── NavBar/
│   │   ├── Navbar.js
│   │   └── Sidebar.js
│   ├── Tasks/
│   │   ├── TaskInput.js
│   │   ├── TaskItem.js
│   │   └── TaskList.js
├── store/
│   ├── authSlice.js
│   ├── taskSlice.js
│   └── themeSlice.js
├── App.js
└── index.js
