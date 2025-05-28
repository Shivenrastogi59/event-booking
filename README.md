# 🎉 Event Booking System API  

A RESTful API built using **Node.js**, **Express**, and **MySQL** for managing events and bookings. This backend-only system allows users to register, log in, browse events, book tickets, and manage their bookings. Admins can manage events.  

---  

## 🚀 Features  

### 👤 User Authentication  
- User registration and login  
- JWT-based authentication  
- Role-based access control (User/Admin)  

### 📅 Event Management  
- Admin can create, update, and delete events  
- Public (including unauthenticated users) can view all events  
- Event structure includes title, description, date & time, location, total seats, and available seats  

### 🎫 Booking System  
- Authenticated users can book and cancel tickets  
- Users can view their own bookings  
- Prevents overbooking by checking seat availability  
- Automatically decreases available seats upon successful booking  

---  
 
## 🏗️ Tech Stack  

- **Backend:** Node.js, Express.js  
- **Database:** MySQL (via XAMPP)  
- **ORM:** Sequelize   
- **Authentication:** JWT  
- **Testing:** Postman  

---  

## 🗂️ Folder Structure (MVC)  
├── config/  
├── controllers/  
├── models/  
├── routes/  
├── middlewares/  
├── migrations/  
├── .env  
├── app.js  
├── server.js  
├── package.json  
└── README.md  

---

## 📦 Installation & Setup

1. **Clone the repository:**  
   ```bash  
   git clone https://github.com/your-username/event-booking-api.git  
   cd event-booking-api  
2. **Install dependencies:**  
   ```bash
   npm install  
3. **Set up the .env file:**  
   ```MYSQL_PORT=(mysql_port[usually-3306])  
      DB_USER=(your_mysql_username)  
      DB_PASS=(your_mysql_password)  
      DB_NAME=event_db  
      DB_HOST=localhost  
      DB_DIALECT=mysql  
      JWT_SECRET=your_jwt_secret  
      PORT=5000  
4. **Start XAMPP and ensure MySQL is running.**  
5. **Create the Database:**  
   ```Open phpMyAdmin  
      Create a database named event_db  
      Sequelize will handle table creation automatically  
6. **Run the server:**  
   ```bash
   npm start

🔌 API Endpoints  

🧑‍💼 Authentication   
POST /api/auth/register – Register a new user  
POST /api/auth/login – Login and get JWT token  

📅 Events  
GET /api/events – View all events (public)  
POST /api/events – Create event (admin only)  
PUT /api/events/:id – Update event (admin only)  
DELETE /api/events/:id – Delete event (admin only)  

🎫 Bookings  
POST /api/bookings/:eventId – Book a ticket (auth required)  
GET /api/bookings – Get user’s bookings (auth required)  
DELETE /api/bookings/:bookingId – Cancel a booking (auth required)  

✅ Sample Request Headers (for Postman)    
Authorization: Bearer <your_jwt_token>  
Content-Type: application/json  

🧪 Testing  
All routes are tested using Postman. You can now simply run the below given docker command & can test api(s) on your own computer.   

🐳 Docker Support  
this Project is Dockerized using the included Dockerfile and docker-compose.yml.  
Run with Docker:  
  ```bash
  docker-compose up --build
