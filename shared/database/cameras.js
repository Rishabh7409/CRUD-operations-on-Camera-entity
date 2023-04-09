const { getItem, getItems, dbQuery, addItem, updateItem, deleteItem } = require('./dynamo-db.js')
const config = require('../../config/index.js')
const CAMERAS = config.DB_TABLE_NAME.CAMERAS

const getCam = async (name) => {
  const params = {
    TableName: CAMERAS,
    Key: {
      name,
    },
  }
  return getItem(params)
}

const getAllCam = async () => {
  const params = {
    TableName: CAMERAS,
  }
  return getItems(params)
}

const updateCam = async ({ name, description, url }) => {
  const params = {
    TableName: CAMERAS,
    Key: { name },
    UpdateExpression: ' set description= :description,url= :url',
    ExpressionAttributeValues: {
      ':description': description,
      ':url': url,
    },
  }
  return updateItem(params)
}


const addCam = async ({ name, description, url }) => {
  const params = {
    TableName: CAMERAS,
    Item: {
      name,
      description,
      url,
    },
  }
  return addItem(params)
}

const deleteCam = async (name) => {
  const params = {
    TableName: CAMERAS,
    Key: {
      name,
    },
  }
  return deleteItem(params)
}

module.exports = {
  getCam,
  getAllCam,
  addCam,
  deleteCam,
  updateCam,
}
