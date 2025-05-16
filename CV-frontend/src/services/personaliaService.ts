import axios from 'axios';
import { CvPart } from "../types";

const baseUrl = '/api/personalia';
//const baseUrl = 'http://localhost:3000/api/personalia';

export const getAllPersonalia = () => {
    const request = axios.get<CvPart[]>(baseUrl);
    return request.then(response => response.data)
}