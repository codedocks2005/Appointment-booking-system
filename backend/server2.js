const express = require('express');
const EventEmitter = require('events');
const path = require('path');

const app = express();
const port = 3000;

//  Middleware to handle JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  Serve static files (HTML, CSS, JS, images)
app.use(express.static(__dirname));

//  Serve loginpage.html when visiting "/"
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'loginpage.html'));
});

//  Create an event emitter instance
const eventEmitter = new EventEmitter();

//  1. One-Time Event Listener (Executes only once)
eventEmitter.once('firstLogin', (username) => {
    console.log(`First-time login detected for ${username}.`);
});

//  2. Standard Event Listener (Executes every time)
eventEmitter.on('userLogin', (username) => {
    console.log(`User Login Event Triggered: ${username} has logged in.`);
});

//  3. Inspecting Event Listeners (Counts how many listeners are attached)
app.get('/checkListeners', (req, res) => {
    res.json({
        userLoginListeners: eventEmitter.listenerCount('userLogin'),
        firstLoginListeners: eventEmitter.listenerCount('firstLogin')
    });
});

//  4. `listeners()` Method - Get all attached listeners for an event
app.get('/getListeners', (req, res) => {
    res.json({
        userLoginListeners: eventEmitter.listeners('userLogin'),
        firstLoginListeners: eventEmitter.listeners('firstLogin')
    });
});

//  5. `newListener` Event (Logs when a new listener is added)
eventEmitter.on('newListener', (event) => {
    console.log(`New listener added for event: ${event}`);
});

//  6. Custom Event Emitter Example (For appointment booking)
class AppointmentEmitter extends EventEmitter {}
const appointmentEmitter = new AppointmentEmitter();

appointmentEmitter.on('appointmentBooked', (username) => {
    console.log(`Notification: ${username} booked an appointment.`);
});

app.post('/bookAppointment', (req, res) => {
    const { username } = req.body;
    appointmentEmitter.emit('appointmentBooked', username);
    res.json({ message: "Appointment booked successfully!" });
});

//  7. Remove Event Listener Example
const removeUserLogin = (username) => {
    console.log(`Removing listener for ${username}`);
};

eventEmitter.on('userLogout', removeUserLogin);

app.post('/logout', (req, res) => {
    const { username } = req.body;
    eventEmitter.removeListener('userLogout', removeUserLogin);
    res.json({ message: "User logged out, listener removed!" });
});

//  Login Route Handling (Triggers Events)
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Please enter username and password" });
    }

    console.log(`Emitting event: userLogin for ${username}`);
    eventEmitter.emit('userLogin', username);

    console.log(`Emitting event: firstLogin for ${username}`);
    eventEmitter.emit('firstLogin', username);

    res.json({ message: "Login successful!" });
});

//  Start Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
