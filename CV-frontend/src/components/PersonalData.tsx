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
  } from '@mui/material'

const PersonalData = () => {
    const [personalia, setPersonalia] = useState<CvPart[]>([]);

    useEffect(() => {
        getAllPersonalia().then(data => {
            setPersonalia(data)
        })
    }, [])


    return (
        
        <div>
            <TableContainer component={Paper}/>
                <Table>
                    <TableHead>
                        <TableRow>
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
        </div>
    )
}

export default PersonalData;

/*


*/