import axios from 'axios';
import { CvPart} from '../types';

const baseUrl = 'http://localhost:3000/api/skills';

export const getAllSkills = () => {
    const request = axios.get<CvPart[]>(baseUrl);
    return request.then(response => response.data);
}