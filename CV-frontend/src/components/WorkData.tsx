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
    tableCellClasses
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
                <Table
                    sx={{
                        [`& .${tableCellClasses.root}`]: {
                            borderBottom: 'none',
                            py: 1
                        }
                    }}>
                    <TableHead>
                        <TableRow sx={{ borderBottom: 1, borderColor: 'grey.400'}}>
                            <TableCell align="left" colSpan={2}><b>Werkervaring</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            {work.map((part, index) => (
                                <Part key={index} part={part} />                        
                            ))}
                    </TableBody>
                </Table>
            <TableContainer/>
        </div>
    )
}

export default WorkData;