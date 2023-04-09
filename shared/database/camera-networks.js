const { getItem, getItems, dbQuery, addItem, updateItem, deleteItem } = require('./dynamo-db.js')
const config = require('../../config/index.js')
const CAMERASNET = config.DB_TABLE_NAME.CAMERASNET

const getCamNet = async (name) => {
  const params = {
    TableName: CAMERASNET,
    Key: {
      name,
    },
  }
  return getItem(params)
}

const getAllCamNet = async () => {
  const params = {
    TableName: CAMERASNET,
  }
  return getItems(params)
}

const updateCamNet = async ({ name, description, cameras }) => {
  const params = {
    TableName: CAMERASNET,
    Key: { name },
    UpdateExpression: ' set description= :description,cameras= :cameras',
    ExpressionAttributeValues: {
      ':description': description,
      ':cameras': cameras,
    },
  }
  return updateItem(params)
}


const addCamNet = async ({ name, description, cameras }) => {
  const params = {
    TableName: CAMERASNET,
    Item: {
      name,
      description,
      cameras,
    },
  }
  return addItem(params)
}

const deleteCamNet = async (name) => {
  const params = {
    TableName: CAMERASNET,
    Key: {
      name,
    },
  }
  return deleteItem(params)
}

module.exports = {
  getCamNet,
  getAllCamNet,
  addCamNet,
  deleteCamNet,
  updateCamNet,
}
