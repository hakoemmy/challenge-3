import Response from "../helpers/Response";
import httpStatus from "http-status";
import { searchPhotos } from '../helpers/searchPhotosByAlbum';

class PhotoController {

   /**
   * @param {object} req
   * @param {object} res
   * @returns {object} function to retrieve all photos under album
   */
  static async searchPhotosByAlbumId(req, res) {
    const fetchPhotos = await searchPhotos(req.params.albumId);
    let photos = [];
    if(fetchPhotos.length){
      fetchPhotos.map((photo) => photos.push({ title: photo.title, thumbnailUrl: photo.thumbnailUrl}))
    }
    Response.successMessage(
      res,
      "All photos retrieved successfuly!",
      photos,
      httpStatus.OK
    );
  }

}
export default PhotoController;
