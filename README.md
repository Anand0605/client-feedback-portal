# 📝 Client Feedback Portal

A full-stack feedback collection web app built with React, Node.js, Express, and MongoDB — deployed on Netlify and Render.

---

## 🌐 Live Links

- 🔗 **Frontend (Netlify)**: [https://client-feedback-05.netlify.app](https://client-feedback-05.netlify.app)
- 🔗 **Backend (Render API)**: [https://client-feedback-api.onrender.com/api/all-feedback](https://client-feedback-api.onrender.com/api/all-feedback)

---

## 📸 Preview

> 💡 Add screenshots in the `screenshots/` folder and link here:


# 📝 Client Feedback Portal

A full-stack web application where clients can submit feedback for company services. Includes a secure admin panel to view and filter all feedback.

---

## 📸 Preview

![Feedback Form Screenshot](./screenshots/form.png)
![Admin Dashboard Screenshot](./screenshots/admin.png)

> 💡 Add real screenshots in the `screenshots/` folder

---

## 🚀 Features

- ✅ Feedback form with Name, Email, Service, Rating, Comments
- ✅ Data stored in MongoDB
- ✅ Admin dashboard with login
- ✅ Filter feedback by service
- ✅ Fully responsive & mobile-friendly
- ✅ Stylish UI using Tailwind CSS
- ✅ Deployment-ready frontend & backend

---

## 🛠️ Tech Stack

**Frontend**
- React.js (Vite)
- React Router DOM
- Tailwind CSS

**Backend**
- Node.js + Express.js
- MongoDB (Mongoose)

**Others**
- Axios
- LocalStorage (for admin login)
- Git + GitHub
- Render (backend), Netlify/Vercel (frontend)

---

## 📁 Folder Structure

client-feedback-portal/
│
├── backend/
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ ├── config/
│ └── server.js
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ └── utils/
│ └── index.html, main.jsx, App.jsx
│
└── README.md


---

## 📦 Installation

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/client-feedback-portal.git
cd client-feedback-portal

Setup Backend

cd backend
npm install

Create a .env file in /backend:


MONGO_URI=mongodb://localhost:27017/client_feedback
PORT=5000

Start the backend server:


npm run dev

Setup Frontend

cd ../frontend
npm install
npm run dev


---

## 🚀 Features

- ✅ Client feedback form (name, email, service, rating, comment)
- ✅ Admin login (localStorage based)
- ✅ Admin dashboard to view all feedback
- ✅ Filter feedback by service
- ✅ Responsive, mobile-friendly design
- ✅ Tailwind CSS styled
- ✅ Live backend (Render) and frontend (Netlify)

---

## 🛠️ Tech Stack

**Frontend**
- React.js (Vite)
- Tailwind CSS
- React Router DOM
- Axios

**Backend**
- Node.js
- Express.js
- MongoDB (Mongoose)
- dotenv
- CORS

**Deployment**
- 🚀 Render (API backend)
- 🌐 Netlify (Frontend)

---

## 🧾 Folder Structure

