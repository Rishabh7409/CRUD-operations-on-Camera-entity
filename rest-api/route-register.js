const express = require('express')
const { allCamera, addCamera, findCamera, deleteCamera, updateCamera } = require('./routes/auth-disable-raw_routes/cam-crud-operations')
const { allCameraNet, addCameraNet, findCameraNet, deleteCameraNet, updateCameraNet } = require('./routes/auth-disable-raw_routes/cam-net-crud-operations')

const registerRouters = (app) => {
  registerRawRouters(app)
}

const registerRawRouters = (app) => {
  // for XML request
  // app.post(
  //   '/api/add-camera',
  //   express.urlencoded({ extended: true }),
  //   express.raw({ 'Content-Type': 'application/xml' }),
  //   addCamera,
  // )
  app.post('/api/add-camera', express.raw({ type: 'application/json' }), addCamera)
  app.get('/api/get-camera', express.raw({ type: 'application/json' }), findCamera)
  app.get('/api/getall-camera', express.raw({ type: 'application/json' }), allCamera)
  app.put('/api/update-camera', express.raw({ type: 'application/json' }), updateCamera)
  app.delete('/api/delete-camera', express.raw({ type: 'application/json' }), deleteCamera)


  app.post('/api/add-camera-net', express.raw({ type: 'application/json' }), addCameraNet)
  app.get('/api/get-camera-net', express.raw({ type: 'application/json' }), findCameraNet)
  app.get('/api/getall-camera-net', express.raw({ type: 'application/json' }), allCameraNet)
  app.put('/api/update-camera-net', express.raw({ type: 'application/json' }), updateCameraNet)
  app.delete('/api/delete-camera-net', express.raw({ type: 'application/json' }), deleteCameraNet)
}


module.exports = { registerRouters }
