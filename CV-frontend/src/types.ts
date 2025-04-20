export interface CvProps {
    cvParts: CvPart[];
}

export interface PartProps {
    part: CvPart;
}

interface CvPartBase {
    name: string;
}

interface CvPartBasic extends CvPartBase {
    description: string;
    kind: 'basic';
}

interface CvPartPersonal extends CvPartBase {
    birth_date: string;
    address: string;
    postal_code: string;
    city: string;
    email: string;
    phonenr: string;
    kind: 'personal';
}

interface CvPartExperience extends CvPartBase {
    start_date: string;
    end_date: string;
    institution: string;
    city: string;
    description: string[];
    kind: 'experience';
}

export type CvPart = 
    | CvPartPersonal
    | CvPartBasic
    | CvPartExperience;





/*
*/


