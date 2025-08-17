const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors()); 
app.use(express.json());

// Connect to MySQL database
const db = mysql.createConnection({
    host: "localhost",
    user: "root", // Change if different
    password: "Darshan@2005", // Change to your MySQL password
    database: "appointment_booking_system"
});

db.connect((err) => {
    if (err) {
        console.error("❌ MySQL Connection Failed:", err);
    } else {
        console.log("✅ Connected to MySQL!");
    }
});

// 📌 1️⃣ Store Booking in MySQL (POST Request)
app.post("/book", (req, res) => {
    const { service, date, time, provider } = req.body;
    const sql = "INSERT INTO appointments (service, date, time, provider) VALUES (?, ?, ?, ?)";
    
    db.query(sql, [service, date, time, provider], (err, result) => {
        if (err) {
            console.error("❌ Insert Error:", err);
            return res.status(500).json({ message: "Database Error" });
        }
        res.json(alert("Appointment is booked successfully"));
    });
});

// 📌 2️⃣ Fetch All Bookings (GET Request)
app.get("/appointments", (req, res) => {
    db.query("SELECT * FROM appointments", (err, results) => {
        if (err) {
            console.error("❌ Fetch Error:", err);
            return res.status(500).json({ message: "Database Error" });
        }
        res.json(results);
    });
});

// Start server
app.listen(5001, () => {
    console.log("🚀 Server running on http://localhost:5001");
});
