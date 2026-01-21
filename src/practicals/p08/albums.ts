import axios from "axios";

interface FullAlbum {}

const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos';
const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';

async function fetchAlbums() {
    try{
        const photos = axios.get(PHOTOS_URL);
        return 
    }catch(err){
        throw new Error("Failed to fetch data");
    }
}

export async function mapPhotoToAlbum(userIds?: number[]): Promise<FullAlbum[]>{

}
