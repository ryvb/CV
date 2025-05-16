import Box from '@mui/material/Box';

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Paper,
    TableHead,
    tableCellClasses
  } from '@mui/material'

const SocialMedia = () => {
    return (
        <Box>
            <TableContainer component={Paper}/>
                <Table
                sx={{
                    [`& .${tableCellClasses.root}`]: {
                        borderBottom: 'none',
                        py: 1
                    }
                }}>
                    <TableHead>
                        <TableRow sx={{ borderBottom: 1, borderColor: 'grey.500'}}>
                            <TableCell align="left" colSpan={2}><b>Social Media</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell sx={{width: 100}}>Linked-In</TableCell><TableCell>www.linkedin.com/in/royvoorbach</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{width: 100}}>Github</TableCell><TableCell>https://github.com/ryvb</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            <TableContainer/>
        </Box>

    )
}

export default SocialMedia;
