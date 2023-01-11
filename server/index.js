let exp = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');

let app = exp();
const PORT = process.env.PORT || 9000;

// app.use(bodyParser.json({ limit: '30mb' }));
// app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));
// app.use(cors);

app.get('/', (req, res) => {
    res.send('Hello js');
})

app.listen(PORT, () => {
    console.log(`Server is running ..... ${PORT}`)
});