# Real-Time Location Tracker

A **real-time location sharing web application** built using **Node.js, Express, Socket.IO, and Leaflet.js**.  
Users can see each other’s live locations on a map and calculate the **distance between users in real time**.

---

## Features

-  Live location tracking using browser Geolocation API  
-  Real-time updates with Socket.IO (WebSockets)  
-  Interactive maps using Leaflet + OpenStreetMap  
-  Multiple users visible simultaneously  
-  Distance calculation between users (Haversine formula)  
-  Automatic marker updates and removal on disconnect  
-  Deployed on Render (production-ready)

---

## 🛠️ Tech Stack

**Frontend**
- HTML (EJS)
- CSS
- JavaScript
- Leaflet.js
- OpenStreetMap

**Backend**
- Node.js
- Express.js
- Socket.IO

**Deployment**
- Render

---

## Project Structure

real-time-tracker/
│
├── public/
│ ├── css/
│ │ └── style.css
│ └── js/
│ └── main.js
│
├── views/
│ └── index.ejs
│
├── app.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md

pgsql
Copy code

---

## 🚀 How It Works

1. Each user shares their live GPS location via the browser
2. Location data is sent to the server using Socket.IO
3. The server broadcasts locations to all connected users
4. Leaflet updates markers on the map in real time
5. Distance between users is calculated on the client side

---

## Getting Started (Local Setup)

### 1 Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/real-time-tracker.git
cd real-time-tracker
2️ Install dependencies
bash
Copy code
npm install
3️ Start the server
bash
Copy code
node app.js
4️ Open in browser
arduino
Copy code
http://localhost:3000
 Make sure location permission is enabled in your browser.

 Live Demo
 Deployed on Render:

perl
Try it on :
https://real-time-tracker-aa6e.onrender.com

