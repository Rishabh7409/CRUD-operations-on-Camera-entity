const {
  getCamNet,
  getAllCamNet,
  addCamNet,
  deleteCamNet,
  updateCamNet, } = require('../../../shared/database/camera-networks')
const config = require('../../../config/index.js')
const _get = require('get-value')

const allCameraNet = async (req, res) => {
  const data = await getAllCamNet()
  res.status(200).send(data)
  return
}

const addCameraNet = async (req, res) => {
  const { name, description, url } = req.body
  const data = await addCamNet({ name, description, url })
  res.status(200).send(data)
  return
}

const findCameraNet = async (req, res) => {
  const { name } = req.body
  const data = await getCamNet(name)
  if (data.Item) {
    res.status(200).send(data.Item)
    return
  } else {
    res.status(400).send(`Error: 'camera network not found'`)
    return
  }
}

const updateCameraNet = async (req, res) => {
  const { name, description, cameras } = req.body
  try {
    await updateCamNet({ name, description, cameras })
    res.status(200).send('success')
    return
  } catch (error) {
    res.status(400).send(error)
    return
  }
}

const deleteCameraNet = async (req, res) => {
  const { name } = req.body
  const data = await deleteCamNet(name)
  if (data.Item) {
    res.status(200).send(data.Item)
    return
  } else {
    res.status(400).send(`Error: 'camera network not found'`)
    return
  }
}

module.exports = { allCameraNet, addCameraNet, findCameraNet, deleteCameraNet, updateCameraNet }
