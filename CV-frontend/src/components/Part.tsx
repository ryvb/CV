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
    const visible = useAppSelector(state => state.visibility)
    
    const workDetails = { display: visible.workDetails ? '' : 'none' }
    const educationDetails = { display: visible.educationDetails ? '' : 'none' }

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
            if (part.subkind === 'education') {
                return (
                    <Fragment>
                        <TableRow>
                            <TableCell colSpan={2}><b>{part.name}</b></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>{part.institution} | {part.start_date} - {part.end_date}</TableCell>
                        </TableRow>
                        <TableRow>
                                <TableCell style={educationDetails}>
                                    <List disablePadding={true} sx={{ listStyleType: 'disc', pl: 4}}>
                                        { part.description.map((bullet, index) => (
                                        <ListItem key={index} sx={{ display: 'list-item'}}>{bullet}</ListItem>
                                    ))}</List>
                                </TableCell>
                        </TableRow>         
                    </Fragment>
                )
            } else if (part.subkind === 'work') {
                return (
                    <Fragment>
                        <TableRow>
                            <TableCell colSpan={2}><b>{part.name}</b></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>{part.institution} | {part.start_date} - {part.end_date}</TableCell>
                        </TableRow>
                        <TableRow>
                                <TableCell style={workDetails}>
                                    <List disablePadding={true} sx={{ listStyleType: 'disc', pl: 4}}>
                                        { part.description.map((bullet, index) => (
                                        <ListItem key={index} sx={{ display: 'list-item'}}>{bullet}</ListItem>
                                    ))}</List>
                                </TableCell>
                        </TableRow>         
                    </Fragment>
                )
            } else {
                return null;
            }
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
                <Fragment>
                    
                    <TableRow>
                        <TableCell colSpan={2}><b>{part.name}</b></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>{part.institution} | {part.start_date} - {part.end_date}</TableCell>
                    </TableRow>
                    <TableRow>
                            <TableCell style={educationDetails}>
                                <List disablePadding={true} sx={{ listStyleType: 'disc', pl: 4}}>
                                    { part.description.map((bullet, index) => (
                                    <ListItem key={index} sx={{ display: 'list-item'}}>{bullet}</ListItem>
                                ))}</List>
                            </TableCell>
                    </TableRow>         
                </Fragment>

*/