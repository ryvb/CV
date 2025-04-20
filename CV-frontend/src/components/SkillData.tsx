import React from 'react'
import { useState, useEffect } from 'react';

import { getAllSkills} from '../services/skillService';
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

const SkillData = () => {
    const [skills, setSkills] = useState<CvPart[]>([]);

    useEffect(() => {
        getAllSkills().then(data => {
            setSkills(data)
        })
    }, [])

    return (
        <div>
            <TableContainer component={Paper}/>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" colSpan={2}><b>Skills</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            {skills.map((part, index) => (
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

export default SkillData;