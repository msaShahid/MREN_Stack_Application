import {v2 as cloudinary} from "cloudinary";
import { response } from "express";
import fs from "fs";

     
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SERCET 
});

const uploadOnClodinary = async (localFilePath) => {
  try {
    if(!localFilePath) return null
    // Upload image in cloudinary
   const response = await cloudinary.uploader.upload(localFilePath, {resource_type: "auto"})
    // file has been upload successfully
    cconsole.log("file is upload on cloudinary! ", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath) //remove file, if upload function got failed!
    return null;
  }
}

