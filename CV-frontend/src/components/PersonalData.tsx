import React from 'react'

import Part from './Part';
import { CvProps } from "../types";

import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Paper,
  } from '@mui/material'

const PersonalData = (props: CvProps) => {
    const { cvParts } = props;
    return (
        <div>
            <TableContainer component={Paper}/>
                <Table>
                    <TableBody>
                        {cvParts.map((part, index) => (
                            <TableRow key={index}>
                                

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

const PersonalData = (props: CvProps) => {
    const { cvParts } = props;
    return (
        <div>
            {cvParts.map((part, index) => (
                <Part key={index} part={part} />
            ))}
        </div>
    )
}

*/