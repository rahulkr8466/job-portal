# job-portal
# 🧑‍💼 Job Portal Backend

A backend API built using **Node.js**, **Express**, and **MongoDB** to manage users, job postings, and job applications.

---

## 🚀 Features

- 🔐 User management (`jobseeker`, `employer`)
- 📢 Job postings (created by employers)
- 📄 Job applications (submitted by jobseekers)
- 🔄 Full CRUD operations for all entities
- 📈 Dummy data generation (10,000+ applications)
- ⚡ Indexed and optimized for performance
- 📦 Organized structure (MVC pattern)

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- @faker-js/faker (for dummy data)
- dotenv
- Postman (for API testing)

---

## 📁 Project Structure

job-portal/
├── models/
├── routes/
├── controllers/
├── utils/
├── config/
├── app.js
├── server.js
└── .env
. Install dependencies
PORT=8080

 Add .env file
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/job-portal

Start the server
npm start
API Endpoints
User Routes
Method	Endpoint	Description
GET	/api/v1/users	Get all users
GET	/api/v1/users/:id	Get single user
POST	/api/v1/users	Create user
PUT	/api/v1/users/:id	Update user
DELETE	/api/v1/users/:id	Delete user

Job Routes
Method	Endpoint	Description
GET	/api/v1/jobs	Get all jobs
GET	/api/v1/jobs/:id	Get single job
POST	/api/v1/jobs	Create job
PUT	/api/v1/jobs/:id	Update job
DELETE	/api/v1/jobs/:id	Delete job

Application Routes
Method	Endpoint	Description
GET	/api/v1/applications	Get all applications
GET	/api/v1/applications/:id	Get single application
POST	/api/v1/applications	Apply to a job
PUT	/api/v1/applications/:id	Update application status
DELETE	/api/v1/applications/:id	Delete application

Dummy Data Scripts
Generate fake users, jobs, and applications to test performance.

1. Generate Users
bash
Copy
Edit
node utils/generateDummyUsers.js
2. Generate Jobs
bash
Copy
Edit
node utils/generateDummyJobs.js
3. Generate Applications
bash
Copy
Edit
node utils/generateDummyApplications.js
