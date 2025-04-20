import React from 'react'
import { useState, useEffect } from 'react';

import { getAllEducation } from '../services/educationService';
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

const EducationData = () => {
    const [education, setEducation] = useState<CvPart[]>([]);

    useEffect(() => {
        getAllEducation().then(data => {
            setEducation(data)
        })
    }, [])

    return (
        <div>
            <TableContainer component={Paper}/>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" colSpan={2}><b>Opleidingen</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            {education.map((part, index) => (
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
        </div>
    )
}

export default EducationData;