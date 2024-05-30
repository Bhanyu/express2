const express = require('express')
const app = express()


const cards = [
    { id: 1, cardNumber: '1234-5678-9012-3456' },
    { id: 2, cardNumber: '2345-6789-0123-4567' },
    { id: 3, cardNumber: '3456-7890-1234-5678' },
    { id: 4, cardNumber: '4567-8901-2345-6789' },
    { id: 5, cardNumber: '5678-9012-3456-7890' }
];



app.get('/card/:id', (req, res) => {
    
    const cardid = parseInt(req.params.id);
    const card = cards.find(card => card.id === cardid);
    if (card) {
        res.send(JSON.stringify(card));
    } else {
        res.status(404).send();
    }

})



app.listen(3000, () => {
    console.log('http://localhost:3000/card/6')
})