import React from 'react';

import Box from '@mui/material/Box';

import WorkData from './WorkData';
import EducationData from './EducationData';


const RightColumn = () => {

    return (
        <Box>
            <EducationData />
            <WorkData />
        </Box>

    )
}


export default RightColumn;