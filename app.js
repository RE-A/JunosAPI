const { urlencoded } = require('express')
const path = require('path')
const express = require('express')
const { sequelize } = require('./models/index')
const router = require('./routes/index')
const app = express()
const port = 3000


app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(router)

// 나중에 Router 기반으로 바꿀 예정
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})