import { useState, useEffect } from 'react';

import { useAppDispatch } from '../hooks'
import { changeEducationDetails } from '../reducers/visibleReducer'

import { getAllEducation } from '../services/educationService';
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
    tableCellClasses
  } from '@mui/material'


const EducationData = () => {
    const [education, setEducation] = useState<CvPart[]>([]);

    const dispatch = useAppDispatch()

    const onClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        await dispatch(changeEducationDetails())
    }

    useEffect(() => {
        getAllEducation().then(data => {
            setEducation(data)
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
                        <TableRow sx={{ borderBottom: 1, borderColor: 'grey.500'}}>
                            <TableCell align="left" colSpan={2}><b>Opleidingen</b> <Button sx={{ textTransform: 'none', color: 'black' }} onClick={onClick}>Details</Button></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            {education.map((part, index) => (
                                <Part key={index} part={part}/>
                            ))}
                    </TableBody>
                </Table>
            <TableContainer/>
        </Box>
    )
}

export default EducationData;

/*


*/