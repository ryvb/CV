import PersonalData from "./PersonalData";
import CertificateData from './CertificateData';
import SkillData from './SkillData';
import LanguageData from "./LanguageData";
import HobbyData from './HobbyData';
import SocialMedia from './SocialMedia';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';


const LeftColumn = () => {

    return (
        <Box sx={{width: 400}}>
            <Stack spacing={2}>
                <PersonalData />
                <CertificateData />
                <SkillData />
                <LanguageData />
                <HobbyData />
                <SocialMedia />
            </Stack>
        </Box>

    )
}

export default LeftColumn;

/*



*/