import React from 'react'
import { useState, useEffect } from 'react';

import { getAllHobbies } from '../services/hobbyService';
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

const HobbyData = () => {
    const [hobbies, setHobbies] = useState<CvPart[]>([]);

    useEffect(() => {
        getAllHobbies().then(data => {
            setHobbies(data)
        })
    }, [])

    return (
        <div>
            <TableContainer component={Paper}/>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" colSpan={2}><b>Hobbies</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            {hobbies.map((part, index) => (
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

export default HobbyData;