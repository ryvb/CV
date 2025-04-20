import React from 'react';

import PersonalData from "./PersonalData";
import CertificateData from './CertificateData';
import SkillData from './SkillData';
import LanguageData from "./LanguageData";
import HobbyData from './HobbyData';

const LeftColumn = () => {

    return (
        <div>
            <div><PersonalData /></div>
            <div><CertificateData /></div>
            <div><SkillData /></div>
            <div><LanguageData /></div>
            <div><HobbyData /></div>
        </div>

    )
}


export default LeftColumn;