const express = require('express');  
const fs = require('fs');  // Import File System module
const cors = require('cors');  // Import CORS for frontend-backend communication
const bodyParser = require('body-parser');  // Import body-parser to handle JSON requests

const app = express();  // Initialize Express app
const PORT = 5001;  // Use port 5001
const FILE_PATH = 'appointments.json';  //   store data

app.use(cors());
app.use(bodyParser.json());


function readAppointments() {
    try {
        const data = fs.readFileSync(FILE_PATH, 'utf8');  // read file 
        return JSON.parse(data);
    } catch (err) {
        return []; 
    }
}


function writeAppointments(data) {
    fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2), 'utf8');   // create 
}


app.post('/book', (req, res) => {
    const { service, date, time, provider } = req.body;

    if (!service || !date || !time || !provider) {
        return res.status(400).json({ message: "All fields are required!" });
    }

    const appointments = readAppointments();
    const newAppointment = { service, date, time, provider };

    appointments.push(newAppointment);  // Add new appointment
    writeAppointments(appointments);  // Save to JSON file

    res.json({ message: 'Appointment booked successfully!', appointment: newAppointment });
});


app.get('/appointments', (req, res) => {
    const appointments = readAppointments();
    res.json({ appointments });  // Send properly formatted JSON object
});



// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
