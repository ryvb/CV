import React from 'react';
import { useState, useEffect } from 'react';

import { getAllPersonalia } from '../services/personaliaService';
import Part from './Part';
import { CvPart } from "../types";

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

import Box from "@mui/material/Box";
 
const PersonalData = () => {
    const [personalia, setPersonalia] = useState<CvPart[]>([]);

    useEffect(() => {
        getAllPersonalia().then(data => {
            
            setPersonalia(data)
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
                    }}
                    >
                    <TableHead>
                        <TableRow sx={{ borderBottom: 1, borderColor: 'grey.500'}}>
                            <TableCell align="left" colSpan={2}><b>Personalia</b></TableCell>
                        </TableRow>    
                    </TableHead> 
                    <TableBody>
                        {personalia.map((part, index) => (
                            <Part key={index} part={part} />
                        ))}
                    </TableBody>
                </Table>
            <TableContainer/>
        </Box>

    )
}

export default PersonalData;

/*
        <Box>
            const arrayData = Array.from(Object.entries(data[0]), ([key, value]) => value);
            


            <TableContainer component={Paper}/>
                <Table
                    sx={{
                        [`& .${tableCellClasses.root}`]: {
                            borderBottom: 'none'
                        }
                    }}
                    size="small"
                    >
                    <TableHead>
                        <TableRow sx={{ borderBottom: 1, borderColor: 'grey.500'}}>
                            <TableCell align="left" colSpan={2}><b>Personalia</b></TableCell>
                        </TableRow>    
                    </TableHead>
                    
                    <TableBody>
                        {personalia.map((part, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <div>Naam: </div>
                                    <div>Geboortedatum: </div>
                                    <div>Adres: </div>
                                    <div>E-mail: </div>
                                    <div>Telefoon Number: </div>
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