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
    tableCellClasses
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
                            <TableCell align="left" colSpan={2}><b>Hobbies</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            {hobbies.map((part, index) => (
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
        </div>
    )
}

export default HobbyData;