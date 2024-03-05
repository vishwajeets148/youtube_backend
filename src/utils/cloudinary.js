import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config({
    path: './.env'
})

          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
  try{
        if(!localFilePath) return  null;

        // Upload the file to the cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,{

              resource_type: "auto"
             
        });

        // file has been uploaded successfully

        // console.log("file has been uploaded successfully", response.url)
          fs.unlinkSync(localFilePath)


          return response
  }
  catch(error){
         fs.unlinkSync(localFilePath)  // remove the locally saved file
    console.log(error)
    return null
  }

}

export  {uploadOnCloudinary}