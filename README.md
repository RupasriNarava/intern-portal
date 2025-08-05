# Intern Fundraising Portal

This web application simulates a referral-based fundraising portal for interns. It features a responsive frontend built using React and a mock backend API developed with Node.js and Express. The portal provides a dashboard interface showing intern details and donation statistics through static and dynamic components.

This project was collaboratively developed by Rupasri Narava and Bhagya Lakshmi.

## Features

- Login and signup interface (UI only, no authentication)
- Dashboard displaying:
  - Intern name
  - Unique referral code
  - Total donations raised
  - Rewards/unlockables section (static display)
- Leaderboard section (static content)
- Backend API returning mock data for the dashboard
- Fully deployed frontend and backend

## Screenshot

<img width="603" height="533" alt="intern" src="https://github.com/user-attachments/assets/e4cd5e0e-6015-40e2-888e-ed0b742b6cfa" />

## Live Demo

- **Frontend (Vercel)**:  
  [https://intern-portal-ckb6c4s16-rupasrinaravas-projects.vercel.app](https://intern-portal-ckb6c4s16-rupasrinaravas-projects.vercel.app)

- **Backend API (Render)**:  
  [https://intern-portal-xisa.onrender.com/api/data](https://intern-portal-xisa.onrender.com/api/data)

- **GitHub Repository**:  
  [https://github.com/RupasriNarava/intern-portal](https://github.com/RupasriNarava/intern-portal)
  

## Technologies Used

- **Frontend**: React, HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Hosting**: Vercel (frontend), Render (backend)

## Project Structure

intern-portal/
├── frontend/ # React frontend
│ └── src/
│ └── components/
│
├── backend/ # Node.js backend with Express
│ └── server.js
│
└── README.md



## How to Run Locally

### Frontend

```bash
cd frontend
npm install
npm start
Backend
bash
Copy code
cd backend
npm install
node server.js
Notes
This application uses static data for demonstration purposes.

Authentication and database integration are not included.

Designed for evaluating frontend-backend structure and deployment.

Contributors
Rupasri Narava – @RupasriNarava

Bhagya Lakshmi – @bhagyalakshmihub
