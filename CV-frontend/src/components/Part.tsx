import React from 'react'
import { Fragment } from 'react'

import { useAppSelector } from '../hooks'

import { PartProps } from "../types";

import Box from '@mui/material/Box';

import {
    TableCell,
    TableRow,
    List,
    ListItem
  } from '@mui/material'

const Part = (props: PartProps) => {
    const visible = useAppSelector(state => state.visibility.value)
    const showWhenVisible = { display: visible ? '' : 'none' }

    const { part } = props;

    switch (part.kind) {
        case 'personal':
            return (
                <Fragment>
                    <TableRow>
                        <TableCell sx={{width: 110}}>Naam</TableCell><TableCell>{part.name}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{width: 110}}>Geboortedatum</TableCell><TableCell>{part.birth_date}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{width: 110}}>Adres</TableCell><TableCell>{part.address} {part.postal_code} {part.city}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{width: 110}}>Email</TableCell><TableCell>{part.email}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{width: 110}}>Telefoon</TableCell><TableCell>{part.phonenr}</TableCell>
                    </TableRow>
                </Fragment>
            );
        case 'experience':
            return (
                <Fragment>
                    <TableRow>
                        <TableCell colSpan={2}><b>{part.name}</b></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>{part.institution} | {part.start_date} - {part.end_date}</TableCell>
                    </TableRow>
                    <TableRow>
                            <TableCell style={showWhenVisible}>
                                <List disablePadding={true} sx={{ listStyleType: 'disc', pl: 4}}>
                                    { part.description.map((bullet, index) => (
                                    <ListItem key={index} sx={{ display: 'list-item'}}>{bullet}</ListItem>
                                ))}</List>
                            </TableCell>
                    </TableRow>         
                </Fragment>
            )
        case 'basic':
            return (
                <Box>
                    <Box>{part.description}</Box>
                </Box>
            )
        default:
            return null;
    }
};

export default Part;


/*
                    <TableRow>
                        <TableCell colSpan={2}>{part.name}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>{part.institution}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>{part.start_date} - {part.end_date}</TableCell><TableCell>{part.city}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>{part.description}</TableCell>
                    </TableRow>

*/