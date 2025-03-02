import React from 'react'
import { useState, useEffect } from 'react';

import { getAllLanguages } from '../services/languageService';
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

const LanguageData = () => {
    const [languages, setLanguages] = useState<CvPart[]>([]);

    useEffect(() => {
        getAllLanguages().then(data => {
            setLanguages(data)
        })
    }, [])

    return (
        <div>
            <TableContainer component={Paper}/>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" colSpan={2}><b>Taal</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            {languages.map((part, index) => (
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

export default LanguageData;