# Task Management Application

## 🚀 Live Demo
[Click here to view the live application](https://simple-to-do-f9f85.web.app/)

## 📌 Description
A Task Management Application where users can add, edit, delete, and reorder tasks using a drag-and-drop interface. The app ensures real-time data synchronization with MongoDB and provides a seamless user experience with Firebase authentication.

## 🛠 Features
- **User Authentication**: Firebase Google Sign-In.
- **Task Management**:
  - Add, edit, delete tasks.
  - Drag-and-drop tasks between categories.
  - Reorder tasks within the same category.
- **Task Categories**:
  - To-Do
  - In Progress
  - Done
- **Real-Time Synchronization**:
  - Instant updates in the database.
  - Tasks persist on refresh.
- **Modern UI**: Built with Vite.js, React, and Tailwind CSS.
- **Mobile Responsive**: Works on both desktop and mobile.


## 🏗 Tech Stack
### **Frontend**
- Vite.js + React
- React Beautiful DnD (or alternative)
- Tailwind CSS
- Firebase Authentication

### **Backend**
- Node.js + Express.js
- MongoDB


## 📂 Folder Structure
```
📦 task-manager-app
├── 📁 frontend
│   ├── 📁 src
│   │   ├── 📁 components
│   │   ├── 📁 pages
│   │   ├── App.js
│   │   ├── index.js
│   ├── package.json

## Backend

├── 📁 backend
│   ├── 📁 models
│   ├── 📁 routes
│   ├── server.js
│   ├── package.json
│
├── README.md
```

## 🔧 Installation & Setup Frontend
### **1. Clone the Repository**
```sh
git clone https://github.com/sayed725/To-do-Client
cd To-Do-Client
```


### **2. Setup Frontend**
```sh
npm install
```
- Create a `.env` file and add your Firebase API keys.
- Start the frontend application:
```sh
npm run dev
```
## 🔧 Installation & Setup Backend

### **1. Clone the Repository**
```sh
git clone https://github.com/sayed725/To-Do-Server
cd To-Do-Server
```

### **2. Setup Backend**
```sh
cd backend
npm install
```
- Create a `.env` file and add your MongoDB connection string and Firebase credentials.
- Start the backend server:
```sh
npm run dev
```


## 📌 API Endpoints
| Method | Endpoint         | Description                     |
|--------|-----------------|---------------------------------|
| POST   | `/tasks`        | Add a new task                 |
| GET    | `/tasks`        | Retrieve all user tasks        |
| PUT    | `/tasks/:id`    | Update task details            |
| DELETE | `/tasks/:id`    | Delete a task                  |



## 🤝 Contributing
Contributions are welcome! Feel free to fork the repo and submit pull requests.

## 📧 Contact
For any inquiries, reach out at [ssayed72533@gmail.com].

