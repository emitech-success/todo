const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Welcome to Emeka Todo App')
})

app.post('/createTodo', function (req, res) {
    res.send('You ust called the createTodo enndpoint')
})

app.get('/getTodos', function (req, res) {
    res.send('You ust called the getTodo enndpoint')
})

app.listen(9000)
console.log("I am listening to Port 9000")
