import React from 'react';

import Box from '@mui/material/Box';

import WorkData from './WorkData';
import EducationData from './EducationData';

import Stack from '@mui/material/Stack';


const RightColumn = () => {

    return (
        <Box>
            <Stack spacing={4}>
                <WorkData />
                <EducationData />            
            </Stack>
        </Box>

    )
}


export default RightColumn;


/*



*/