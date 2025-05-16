import { useState, useEffect } from 'react';

import { getAllCertificates } from '../services/certificateService';

import { CvPart } from "../types";
import Part from './Part';

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


const CertificateData = () => {
    const [certificates, setCertificates] = useState<CvPart[]>([]);

    useEffect(() => {
        getAllCertificates().then(data => {
            setCertificates(data)
        })
    }, [])

    return (
        <Box>
            <TableContainer component={Paper}/>
                <Table
                    sx={{
                        [`& .${tableCellClasses.root}`]: {
                            borderBottom: 'none',
                            px: 1.5,
                            py: 0.35
                        }
                    }}>
                    <TableHead>
                        <TableRow sx={{ borderBottom: 1, borderColor: 'grey.400'}}>
                            <TableCell align="left" colSpan={2}><b>Certificaten</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            {certificates.map((part, index) => (
                                <TableRow key={index}>
                                    <TableCell sx={{width: 110}}>
                                        {part.name}
                                    </TableCell>
                                    <TableCell>
                                        <Part key={index} part={part} />                        
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            <TableContainer/>
        </Box>

    )
}

export default CertificateData;

/*


        <Box>
            <TableContainer component={Paper}/>
                <Table
                    sx={{
                        [`& .${tableCellClasses.root}`]: {
                            borderBottom: 'none',
                            px: 1.5,
                            py: 0.25
                        }
                    }}>
                    <TableHead>
                        <TableRow sx={{ borderBottom: 1, borderColor: 'grey.400'}}>
                            <TableCell align="left" colSpan={2}><b>Certificaten</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            {certificates.map((part, index) => (
                                <TableRow key={index}>
                                    <TableCell sx={{width: 110}}>
                                        {part.name}
                                    </TableCell>
                                    <TableCell>
                                        <Part key={index} part={part} />                        
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            <TableContainer/>
        </Box>








*/