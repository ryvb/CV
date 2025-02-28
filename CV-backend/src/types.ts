interface CvPartBase {
    name: string;
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

interface CvPartLanguage extends CvPartBase {
    fluency: string;
    kind: 'language';
}

export type CvPart = 
    | CvPartPersonal
    | CvPartLanguage;
