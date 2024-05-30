const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Telefon kitabçası üçün yaddaşda saxlanacaq qeyd
const phonebook = [];

// POST sorğusu: Yeni telefon kitabçası qeydi əlavə etmək üçün
app.post('/phonebook', (req, res) => {
    const newEntry = req.body;
    phonebook.push(newEntry);
    res.json({ message: 'Qeyd uğurla əlavə edildi', newEntry });
});

// GET sorğusu: Telefon kitabçasını əldə etmək üçün
app.get('/phonebook', (req, res) => {
    res.json(phonebook);
});

const port = 3001;
app.listen(port, () => {
    console.log(`Server http://localhost:${port} ünvanında çalışır`);
});
