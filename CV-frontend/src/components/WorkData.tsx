import React from 'react'
import { useState, useEffect } from 'react';

import { getAllWork } from '../services/workService';
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

const WorkData = () => {
    const [work, setWork] = useState<CvPart[]>([]);

    useEffect(() => {
        getAllWork().then(data => {
            setWork(data)
        })
    }, [])

    return (
        <div>
            <TableContainer component={Paper}/>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" colSpan={2}><b>Werkervaring</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            {work.map((part, index) => (
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

export default WorkData;