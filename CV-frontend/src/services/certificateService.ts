import axios from 'axios';
import { CvPart} from '../types';

//const baseUrl = '/api/certificates';
const baseUrl = 'http://localhost:3000/api/certificates';

export const getAllCertificates = () => {
    const request = axios.get<CvPart[]>(baseUrl);
    return request.then(response => response.data);
}

/*


*/