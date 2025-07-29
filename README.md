# 🍽 Eatery – Full-Stack Food Delivery Application

**Eatery** is a production-ready food delivery web application built using the MERN stack (MongoDB, Express, React, Node). Includes a secure user checkout experience, real-time cart updates, and an admin dashboard for restaurant order and menu management.

It provides a seamless experience for users to browse meals, manage carts, and place orders with secure online payments. It also includes a powerful admin dashboard to manage menu items and track orders in real-time.

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

- **Diverse Menu Browse:** Explore a wide array of food items with dynamic **category filtering** (e.g., Desserts, Noodles) to quickly find what you crave.
- **Intuitive Cart Management:** Easily add items, adjust quantities, and remove products from your cart with **real-time updates**.
- **Secure Authentication:** Create and manage your account with **secure sign-up and login** functionalities, leveraging **JWT-based authentication**.
- **Effortless Checkout:** Proceed to a streamlined checkout process, including delivery information input and **secure payment integration with Stripe** (test mode).
- **Real-time Order Tracking:** Keep an eye on your order's journey with **live status updates** (e.g., Processing, Out for Delivery, Delivered) directly on your "My Orders" page.
- **Responsive Design:** Enjoy a perfectly optimized layout on any screen size, from mobile phones to desktops.

### 📊 Powerful Admin Dashboard

The dedicated admin panel empowers restaurant owners/managers with complete control over their menu and orders.

- **Comprehensive Order Management:** View all incoming orders with detailed information (customer details, delivery address, items, total price) and **update order statuses** with a single click.
- **Dynamic Menu Management (CRUD):** Effortlessly **add new food items**, upload images, provide descriptions, set categories and prices, and **edit or delete existing menu items** in real-time.
- **Centralized Control:** A unified dashboard for efficient day-to-day operations.

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
- Includes **authentication, payments, cart management**, and **admin control**
- Demonstrates full lifecycle of an e-commerce-style application
- Clean, modular React code with state management
- Scalable structure with deployment-ready configuration
- Role-based protected routes with middleware
- Product search & filtering

---

## 🎯 Potential Enhancements

- OTP or Google login integration
- Push notifications for order status
- Admin analytics dashboard with charts

---
