import {fileURLToPath} from 'url';
import path, {dirname} from 'path';
import {FileModel} from "../models/fileModel.js";
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const UploadImageService = async(req) => {
    try {
        const userId = req.cookies.userId;
        const uploadedFile = req.files.file;
        let imageName = Date.now() + '-' + uploadedFile.name;
        const directoryPath = path.join(__dirname, '../../uploads/');

        if (!fs.existsSync(directoryPath)) {
            fs.mkdirSync(directoryPath, { recursive: true });
        }

        let uploadPath = path.join(directoryPath, imageName);

        const previousImage = await FileModel.findOne({
            user_id: userId
        });
        if (previousImage != null) {
            await fs.unlink(path.join(__dirname, '../../uploads/', previousImage.imageName), (err) => {
                if (err) {
                    return {status: true, message: 'Error occurred while uploading file'};
                }
            })
        }

        await uploadedFile.mv(uploadPath, (err) => {
            if (err) {
                return {status: true, message: 'Error occurred while uploading file'};
            }
        });

        await FileModel.updateOne({ user_id:userId }, {imageName: imageName, user_id: userId}, {upsert: true})
        return {
            status: true,
            message: 'Image uploaded successfully'
        };
    } catch (error) {
        return {status: false, message: error.toString()}
    }
}

export const GetImageService = async(req) => {
    try {
        const userId = req.cookies.userId;
        const file = await FileModel.findOne({
            user_id: userId
        });
        return path.join(__dirname, '../../uploads/', file.imageName)
    } catch (error) {
        return {status: false, message: error.toString()}
    }
}

export const DeleteImageService = async(req) => {
    try {
        const userId = req.cookies.userId;
        const previousImage = await FileModel.findOne({
            user_id: userId
        });
        await fs.unlink(path.join(__dirname, '../../uploads/', previousImage.imageName), (err) => {
            if (err) {
                return {status: true, message: 'Error occurred while uploading file'};
            }
        })
        await FileModel.deleteOne({ user_id:userId })
        return {
            status: true,
            message: 'Image deleted successfully'
        };
    } catch (error) {
        return {status: false, message: error.toString()}
    }
}