# 🍽 Eatery – Full-Stack Food Delivery Application

**Eatery** is a production-ready food delivery web application built using the MERN stack (MongoDB, Express, React, Node). It includes secure user authentication, real-time cart updates, Stripe payment integration, and a full-featured admin dashboard to manage menu items and orders.

It offers a seamless experience for users to browse meals, manage carts, and place orders, while giving administrators full control over food items and order fulfillment.

---

## 🔥 Key Features

### 👥 User Functionality

- Secure **JWT-based authentication** (Register/Login)
- Browse and filter meals by categories
- Add or remove items from cart with real-time updates
- Checkout using **Stripe** (test mode) for payments
- Track order status and view order history
- Role-based protected routes with middleware
- Product search & filtering

### 🛠 Admin Functionality

- Add, edit, or delete food items (CRUD)
- View and manage all customer orders
- Update order status (e.g., _Processing → Out for Delivery → Delivered_)

### 💡 UX & Architecture

- Fully responsive UI across devices (mobile, tablet, desktop)
- Clean component-based architecture with **React Hooks & Context API**
- Modular, scalable codebase with separate **frontend**, **admin**, and **backend**

---

## ⚙️ Tech Stack

| Layer          | Technologies                              |
| -------------- | ----------------------------------------- |
| Frontend       | React.js, Vite, Context API, React Router |
| Backend        | Node.js, Express.js                       |
| Database       | MongoDB Atlas                             |
| Authentication | JWT (JSON Web Tokens)                     |
| Payments       | Stripe API (test mode)                    |

---

## ✨ Key Highlights

### 🚀 Seamless User Experience

Eatery offers an intuitive and responsive interface, ensuring a delightful experience across all devices.

- **Diverse Menu Browse:** Explore a wide array of food items with dynamic **category filtering** (e.g., Desserts, Noodles).
- **Intuitive Cart Management:** Add items, update quantities, or remove products from the cart with **real-time updates**.
- **Secure Authentication:** Register/login securely using **JWT-based authentication**.
- **Effortless Checkout:** Checkout with delivery information and **Stripe payment**.
- **Real-time Order Tracking:** Track order progress in your "My Orders" page.
- **Responsive Design:** Optimized layout for mobile, tablet, and desktop.

### 📊 Powerful Admin Dashboard

The dedicated admin panel empowers restaurant owners/managers with complete control.

- **Comprehensive Order Management:** View orders with customer details and update delivery status.
- **Dynamic Menu Management:** Add/edit/delete food items with images, pricing, and category assignments.
- **Centralized Control:** Simplified dashboard for efficient daily operations.

---

## 📁 Project Structure

```
eatery/
├── frontend/        # User-facing frontend (React)
├── admin/           # Admin dashboard frontend (React)
├── backend/         # Node.js + Express server
└── README.md
```

---

## 📷 Screenshots

All application screenshots are organized in the [`/ss`](./ss) folder.

This includes complete views of:

- 🏠 Homepage
- 🧺 Cart functionality
- 💳 Stripe Checkout flow
- 📦 Order tracking
- 🧑‍🍳 Admin Dashboard (menu & orders)

> Open the `ss` folder to explore the full visual flow of both user and admin interfaces.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/eatery.git
cd eatery
```

### 2. Set Environment Variables

Create a `.env` file in the `backend/` folder:

```
MONGO_URI=<your_mongodb_connection_string>
STRIPE_SECRET_KEY=<your_stripe_secret_key>
JWT_SECRET=<your_jwt_secret>
```

### 3. Install & Run

#### Frontend (User)

```bash
cd frontend
npm install
npm run dev
```

#### Admin Panel

```bash
cd ../admin
npm install
npm run dev
```

#### Backend API

```bash
cd ../backend
npm install
nodemon server.js
```

---

## 💼 Why This Project Stands Out

- Real-world, production-ready **MERN stack** architecture
- Role-based **protected routes** with middleware
- Fully implemented **authentication**, **Stripe payments**, **cart management**, and **admin panel**
- End-to-end **e-commerce application lifecycle**
- Modular and scalable frontend/backend separation
- Clean and responsive UI with reusable components
- Search, filter, and real-time order tracking

---

## 🎯 Potential Enhancements

- Google or OTP-based login integration
- Push notifications for order status
- Admin analytics dashboard with charts
- Email confirmation for successful orders
- File/image compression for performance optimization

---

## 🧑‍💻 Author

**Renu**  
Full-Stack Developer | MERN Stack Specialist

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
