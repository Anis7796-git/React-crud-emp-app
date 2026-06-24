# Anis Shaikh



# 📋 Employee Management System

> A complete React application with **Create, Read, and Delete** functionality for managing employees with a modern, responsive UI.

---

## 🚀 Live Demo

[![Netlify Status](https://img.shields.io/badge/Netlify-Deployed-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://your-app.netlify.app)
[![Vercel Status](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://your-app.vercel.app)

---

## ✨ Features

<table align="center">
  <tr>
    <td align="center">📋</td>
    <td align="center">➕</td>
    <td align="center">🗑️</td>
    <td align="center">🔍</td>
    <td align="center">✏️</td>
    <td align="center">📱</td>
  </tr>
  <tr>
    <td align="center"><b>View Employees</b><br/>✅ Working</td>
    <td align="center"><b>Add Employee</b><br/>✅ Working</td>
    <td align="center"><b>Delete Employee</b><br/>✅ Working</td>
    <td align="center"><b>Search</b><br/>🚧 Coming Soon</td>
    <td align="center"><b>Edit Employee</b><br/>🚧 Coming Soon</td>
    <td align="center"><b>Responsive</b><br/>✅ Working</td>
  </tr>
</table>

---

## 🛠️ Tech Stack

<div align="center">

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.x-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-4.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)

</div>

---

## 📸 Screenshots

<div align="center">
  
### 🏠 Home Page

![Home Page](https://via.placeholder.com/800x400/2c3e50/ffffff?text=Employee+Management+Home)

### 📊 Employee Table

![Employee Table](https://via.placeholder.com/800x400/34495e/ffffff?text=Employee+Table+View)

### ➕ Add Employee Modal

![Add Employee Modal](https://via.placeholder.com/800x400/2c3e50/ffffff?text=Add+Employee+Modal)

</div>

## 🧩 Project Architecture

```mermaid
graph TD
    A[App.jsx] --> B[Header.jsx]
    A --> C[Center.jsx]
    A --> D[Footer.jsx]
    C --> E[CrudEMp.jsx]
    E --> F[AddEmployee.jsx]
    E --> G[EmpTable.jsx]
    F -->|onSave| E
    G -->|onDelete| E
    
    style A fill:#61DAFB,color:#000
    style B fill:#7952B3,color:#fff
    style C fill:#7952B3,color:#fff
    style D fill:#7952B3,color:#fff
    style E fill:#F7DF1E,color:#000
    style F fill:#F7DF1E,color:#000
    style G fill:#F7DF1E,color:#000
```
---

## 📁 Project Structure


## 📁 Project Structure

```
employee-management/
├── 📦 public/
│   └── 🖼️ vite.svg
├── 📂 src/
│   ├── 📂 components/
│   │   ├── 📂 header/
│   │   │   └── 📄 Header.jsx          # 🏷️ Navigation Bar
│   │   ├── 📂 footer/
│   │   │   ├── 📄 Footer.jsx          # 🦶 Footer Component
│   │   │   └── 🎨 Footer.css          # Footer Styles
│   │   ├── 📂 center/
│   │   │   └── 📄 Center.jsx          # 🎯 Main Content Wrapper
│   │   └── 📂 crud-emp/
│   │       ├── 📄 CrudEMp.jsx         # 🧠 Main CRUD Logic
│   │       ├── 📄 EmpTable.jsx        # 📊 Employee Table
│   │       └── 📄 AddEmployee.jsx     # ➕ Add Employee Modal
│   ├── 📄 App.jsx                      # 🚀 Root Component
│   ├── 🎨 App.css                      # Global Styles
│   └── 🔥 main.jsx                     # Entry Point
├── 📄 package.json                     # 📦 Dependencies
├── 📄 README.md                        # 📖 Documentation
└── 🚫 .gitignore                       # Git Ignore
```
