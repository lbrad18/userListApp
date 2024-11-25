const express = require('express');
const db = require('./users.json');
const app = express();
const cors = require('cors');
const CLIENT_PORT = 5174;
const SERVER_PORT = 8080;
const corsOptions = {
    origin: [`http://localhost:${CLIENT_PORT}`],
};

app.use(cors(corsOptions));

app.get("/users", (req, res) =>{
    res.json({ users: db})
})

app.get("/users/:id", (req, res) =>{
    const index = req.params.id;
    res.json({ userDetails: db[index-1]})
})

app.listen(SERVER_PORT, () => {
    console.log(`server started on port ${SERVER_PORT}`);
});


