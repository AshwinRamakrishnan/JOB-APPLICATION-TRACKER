📌 Job Application Tracker
📖 Project Description

The Job Application Tracker is a full-stack web application designed to help users manage and track their job applications efficiently. Users can create accounts, add job details, update their application status, and keep track of their progress in the job-hunting process.

🚀 Features

🔐 User Authentication – Secure login and registration with encrypted passwords

📝 Add Applications – Save company name, role, applied date, and notes

📊 Track Status – Update application progress (e.g., Applied, Interview, Offered, Rejected)

✏️ Edit & Delete – Modify or remove job applications easily

📂 History Log – View commit history & version control using GitHub

🛠️ Tech Stack

Frontend: React.js (with Hooks & Context for state management)
Backend: Node.js + Express.js
Database: MongoDB (Mongoose ORM)
Authentication: JWT (JSON Web Tokens) & bcrypt for password hashing
Version Control: Git & GitHub

⚙️ Installation & Setup

Clone the repository:

git clone https://github.com/your-username/job-application-tracker.git
cd job-application-tracker


Install dependencies:

Backend

cd server
npm install


Frontend

cd client
npm install


Setup Environment Variables:
Create a .env file inside the server/ folder and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Run the project:

Backend:

npm start


Frontend:

npm start

📂 Project Structure
job-application-tracker/
 ├── client/        → React frontend
 ├── server/        → Express backend
 ├── models/        → MongoDB schemas
 ├── routes/        → API routes
 ├── controllers/   → Business logic
 └── README.md

🧪 Testing

Frontend Testing: Jest + React Testing Library

Backend Testing: Postman & Supertest

🌱 Future Enhancements

Add resume upload option


👨‍💻 Contributors

Ashwin.R – Project Lead & Full-Stack Developer

Integration with LinkedIn / Indeed APIs

Advanced analytics dashboard for job applications
