import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const Header = () => {
    return (
        <Box
            sx={{
                padding: 3,
                borderBottom: 1, borderColor: 'grey.500' 
            }}
        >
            <Typography variant="h4">
                Roy Voorbach
            </Typography>
        </Box>
    )
}

export default Header;