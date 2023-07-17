const express = require('express')

const app = express()
const PORT = 3000
const { apis } = require('./routes')

app.use(express.urlencoded({ extended: true })) // body-parser
app.use('/api', apis)
app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})
