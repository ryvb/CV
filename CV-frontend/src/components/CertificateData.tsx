import React from 'react'
import { useState, useEffect } from 'react';

import { getAllCertificates } from '../services/certificateService';

import { CvPart } from "../types";
import Part from './Part';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const CertificateData = () => {
    const [certificates, setCertificates] = useState<CvPart[]>([]);

    useEffect(() => {
        getAllCertificates().then(data => {
            setCertificates(data)
        })
    }, [])

    return (
        <Box>
             <List>
                <ListItemText 
                    primary="Certificaten"    
                />
                <Divider />
                {certificates.map((part, index) => (
                    <ListItem key={index}>
                        <Part key={index} part={part} />
                    </ListItem>
                ))}
            </List>

        </Box>

    )
}

export default CertificateData;

/*

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Paper,
    TableHead,
  } from '@mui/material'

<CvCard props={certificates}></CvCard>


            <TableContainer component={Paper}/>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" colSpan={2}><b>Certificaten</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            {certificates.map((part, index) => (
                                <TableRow key={index}>
                                    <TableCell>
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





*/