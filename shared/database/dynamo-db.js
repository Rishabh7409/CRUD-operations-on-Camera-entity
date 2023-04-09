const AWS = require('aws-sdk')
AWS.config.update({ region: 'us-east-1' });
const dynamoDBClient = new AWS.DynamoDB.DocumentClient()


const dbQuery = async (params) => {
  try {
    const result = await dynamoDBClient.query(params).promise()
    return result
  } catch (error) {
    throw error
  }
}

const getItem = async (params) => {
  try {
    const result = await dynamoDBClient.get(params).promise()
    return result
  } catch (error) {
    throw error
  }
}

const getItems = async (params) => {
  try {
    const result = await dynamoDBClient.scan(params).promise()
    return result
  } catch (error) {
    throw error
  }
}

const addItem = async (params) => {
  try {
    const result = await dynamoDBClient.put(params).promise()
    return result
  } catch (error) {
    throw error
  }
}

const updateItem = async (params) => {
  const paramGet = {
    TableName: params.TableName,
    Key: {
      name: params.Key.name,
    },
  }
  const data = await getItem(paramGet)

  if (data.Item) {
    try {
      const result = await dynamoDBClient.update(params).promise()
      return result
    } catch (error) {
      throw error
    }
  } else {
    throw new Error('Not found')
  }
}


const deleteItem = async (params) => {
  try {
    const result = await dynamoDBClient.delete(params).promise()
    return result
  } catch (error) {
    throw error
  }
}

module.exports = {
  dbQuery,
  getItem,
  getItems,
  addItem,
  updateItem,
  deleteItem,
}
