const { getCam, getAllCam, addCam, deleteCam, updateCam, } = require('../../../shared/database/cameras')
const { deleteCamNet } = require('../../../shared/database/camera-networks')

const allCamera = async (req, res) => {
  const data = await getAllCam()
  res.status(200).send(data)
  return
}

const addCamera = async (req, res) => {
  const { name, description, url } = req.body
  const data = await addCam({ name, description, url })
  res.status(200).send(data)
  return
}

const findCamera = async (req, res) => {
  const { name } = req.body
  const data = await getCam(name)
  if (data.Item) {
    res.status(200).send(data.Item)
    return
  } else {
    res.status(400).send(`Error: 'camera not found'`)
    return
  }
}

const updateCamera = async (req, res) => {
  const { name, description, url } = req.body
  try {
    await updateCam({ name, description, url })
    res.status(200).send('success')
    return
  } catch (error) {
    res.status(400).send(error)
    return
  }
}

const deleteCamera = async (req, res) => {
  const { name } = req.body
  try {
    await deleteCam(name)
    await deleteCamNet(name)
    res.status(200).send('success')
    return
  } catch (error) {
    res.status(400).send(error)
    return
  }
}

module.exports = { allCamera, addCamera, findCamera, deleteCamera, updateCamera }
