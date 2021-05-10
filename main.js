const express = require('express')
const app = express()
const port = process.env.PORT||3000

app.get('/', (req, res) => {
  res.send('Hello World ejemplo heroku!. Añadida una nueva cosa')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})