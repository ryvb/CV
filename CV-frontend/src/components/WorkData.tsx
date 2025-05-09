import React from 'react'
import { useState, useEffect } from 'react';

import { useAppDispatch } from '../hooks'
import { changeWorkDetails } from '../reducers/visibleReducer';

import { getAllWork } from '../services/workService';
import Part from './Part';
import { CvPart } from "../types";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Paper,
    TableHead,
    tableCellClasses,
} from '@mui/material'


const WorkData = () => {
    const [work, setWork] = useState<CvPart[]>([]);

    const dispatch = useAppDispatch()

    const onClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        await dispatch(changeWorkDetails())
    }

    useEffect(() => {
        getAllWork().then(data => {
            setWork(data)
        })
    }, [])

    return (
        <Box>
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
                            <TableCell align="left" colSpan={2}><b>Werkervaring</b> <Button sx={{ textTransform: 'none', color: 'black' }} onClick={onClick}>Details</Button></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            {work.map((part, index) => (
                                <Part key={index} part={part} />                        
                            ))}
                    </TableBody>
                </Table>
            <TableContainer/>
        </Box>
    )
}

export default WorkData;

/*

sx={{ color: 'black', fontSize: 10 }}

*/