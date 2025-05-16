import axios from 'axios';
import { CvPart} from '../types';

const baseUrl = '/api/education';
//const baseUrl = 'http://localhost:3000/api/education';

export const getAllEducation = () => {
    const request = axios.get<CvPart[]>(baseUrl);
    return request.then(response => response.data);
}