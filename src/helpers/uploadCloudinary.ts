require('dotenv').config();

import { v2 } from 'cloudinary';
const { CLOUD_NAME, API_KEY, API_SECRET } = process.env;

v2.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
  secure: true
});

export const uploadCloudinary = async (picture) => {
  return await v2.uploader.upload(picture)
}