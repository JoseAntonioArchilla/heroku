const express = require('express')
const app = express()
const port = env.PORT||3000

app.get('/', (req, res) => {
  res.send('Hello World ejemplo heroku!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})