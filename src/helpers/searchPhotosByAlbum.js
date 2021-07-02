import axios from 'axios';

const apiCall = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
  });

export const searchPhotos = async (albumId) => {
 try{
    const response = await apiCall.get(`/albums/${albumId}/photos`);
    return response.data;
 }catch(error){
   return error.response;
 }
};
