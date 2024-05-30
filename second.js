const express = require('express');
const app = express();
const fs = require('fs');


const employees = () =>{
    const data = fs.readFileSync('user.json');
    return JSON.parse(data);
}



app.get('/', (req, res) => {
    res.send("salam");
});

app.get('/card', (req, res) => {
    res.send("Bu route kartlar üçün cavabdehdir");
});

app.get('/client', (req, res) => {
    res.send("Bu marşrut müştərilər üçün cavabdehdir");
});

app.get('/employee', (req, res) => {
    res.send(employees());
});

app.listen(3002, () => {
    console.log('http://localhost:3000/');
});