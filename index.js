const { app } = require('./app')

var server = app.listen(8000, function () {
  console.log('App listening at http://localhost:8000/')
})
