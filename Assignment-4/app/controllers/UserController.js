import {GetUserService, UpdateUserService} from "../services/UserService.js";
import {DeleteImageService, GetImageService, UploadImageService} from "../services/FileService.js";


export const getUser = async(req, res) => {
    let result = await GetUserService(req)
    return res.json(result)
}

export const updateUser = async(req, res) => {
    let result = await UpdateUserService(req)
    return res.json(result)
}

export const uploadImage = async(req, res) => {
    let result = await UploadImageService(req)
    return res.json(result)
}

export const getImage = async(req, res) => {
    let result = await GetImageService(req)
    return res.sendFile(result)
}

export const deleteImage = async(req, res) => {
    let result = await DeleteImageService(req)
    return res.json(result)
}