import axios from 'axios';
import { CvPart} from '../types';

//const baseUrl = '/api/hobbies';
const baseUrl = 'http://localhost:3000/api/hobbies';

export const getAllHobbies = () => {
    const request = axios.get<CvPart[]>(baseUrl);
    return request.then(response => response.data);
}