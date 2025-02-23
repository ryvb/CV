import React from 'react'

import Part from './Part';
import { CvProps } from "../types";

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Paper,
    TableHead,
  } from '@mui/material'

const PersonalData = (props: CvProps) => {
    const { cvParts } = props;
    return (
        <div>
            <TableContainer component={Paper}/>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" colSpan={2}><b>Personalia</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cvParts.map((part, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <div>Naam: </div>
                                    <div>Geboortedatum: </div>
                                    <div>Adres: </div>
                                    <div>E-mail: </div>
                                    <div>Telefoon Number: </div>
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

export default PersonalData;

/*


*/