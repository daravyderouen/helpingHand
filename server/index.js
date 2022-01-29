const PORT = process.env.PORT || 3000
const express = require('express')
// const path = require('path')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()
const app = express()

app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
  res.json('hi')
  const options = {
    method: 'GET',
    url: 'https://daravyderouen-helpinghands.herokuapp.com/home',
    headers: {
        'helpinghands-host': 'daravyderouen-helpinghands.herokuapp.com/home',
        'helpinghands-key': process.env.CONNECTION_STRING
    }
  }
  axios.request(options).then((response) => {
    res.json(response.data)
  }).catch((error) => {
    console.log(error)
  })
})




// const { SERVER_PORT } = process.env
const { seed, getUsers, createUsers, deleteUsers} = require('./controller.js')



app.use(express.static("server"));
// app.get('/', (req, res) => {
//   res.sendFile('/index.html')

// })

app.post('/seed', seed)

app.get('/guests', getUsers)
app.post('/guests', createUsers)

app.delete('/guests/:id', deleteUsers)









/*
app.get("/index.css", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.css"));
    //rollbar.log('They need CSS!')
  });
  app.get("/index.js", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.js"));
    //rollbar.log('Hey, they started me up again')
  });
*/









//app.use(rollbar.errorHandler());







app.listen(PORT, () => {
  console.log(`My server is on fiya ${PORT}`)
})