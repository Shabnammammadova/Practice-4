const express = require('express')

// const dotenv=require('dotenv')
// const cors=require("cors")
const app = express()
const PORT = 8080



// app.use(dotenv())
// app.use(cors())


app.get('/api', (req, res) => {
  res.send('Hello Node!')
})

app.get('/api/products', (req, res) => {
  res.send(['Web development', 'Photography', 'Digital media',"Online marketing"]);
});

app.get('/api/products/:id', (req, res) => {
  res.send(req.params.id);
})

app.get('/api/products/:title/:product', (req, res) => {
    res.send(req.params);
});
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})



