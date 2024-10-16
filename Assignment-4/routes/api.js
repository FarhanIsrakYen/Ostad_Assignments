import express from 'express';
import * as AuthController from "../app/controllers/AuthController.js";
import * as UserController from "../app/controllers/UserController.js";
import AuthMiddleware from "../app/middlewares/AuthMiddleware.js";

const router = express.Router();


// registration & login
router.post('/login', AuthController.login);
router.post('/register', AuthController.register);

// users
router.get('/user', AuthMiddleware, UserController.getUser);
router.put('/user', AuthMiddleware, UserController.updateUser);

// files
router.post('/upload', AuthMiddleware, UserController.uploadImage);
router.get('/image', UserController.getImage);
router.delete('/image', AuthMiddleware, UserController.deleteImage);

export default router;