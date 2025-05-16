import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


import Part from './Part';
import { CvPart } from '../types';

const CvCard = ( {cvContent}: {cvContent: CvPart[] } ) => {

    return (
        <div>
            <Card>
                <CardContent>
                    {cvContent.map((part, index) => (
                        <Part key={index} part={part} />
                    ))}
                </CardContent>
            </Card>
        </div>
        

    )
}


export default CvCard;





/*

const CvCard = ( {cvContent}: {cvContent: CvPart[] } ) => {

    return (
        <div>
            <Card>
                <CardContent>
                    {cvContent.map((part, index) => (
                        <Part key={index} part={part} />
                    ))}
                </CardContent>
            </Card>
        </div>
        

    )
}


export default CvCard;

*/
