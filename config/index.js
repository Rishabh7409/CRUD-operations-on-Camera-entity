const AWS = require('aws-sdk')
require('dotenv').config()

const config = {
  ...process.env,

  DB_TABLE_NAME: {
    CAMERAS: 'Cameras',
    CAMERASNET: 'CameraNetworks',
  },
}
AWS.config.update({
  // accessKeyId: config.AWS_ACCESS_KEY_ID,
  // secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
  region: config.AWS_DEFAULT_REGION,
})

console.log({
  CLOUD_ENV: config.CLOUD_ENV,
  AWS_DEFAULT_REGION: config.AWS_DEFAULT_REGION,
})

module.exports = config
