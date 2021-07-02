import express from "express";
import Validator from "../../middlewares/Validator";
import PhotoController from "../../controllers/PhotoController";
import inputError from "../../middlewares/inputError";

const photoRouter = express.Router();

photoRouter.get(
    "/:albumId/photos",
    Validator.photoRules(),
    inputError,
    PhotoController.searchPhotosByAlbumId
  );

 

export default photoRouter;
