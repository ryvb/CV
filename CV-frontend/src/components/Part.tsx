import React from 'react'

import { PartProps } from "../types";

const Part = (props: PartProps) => {
    const { part } = props;

    switch (part.kind) {
        case "personal":
            return (
                <div>
                    <div>{part.name}</div>
                    <div>Date of birth: {part.birth_date}</div>
                    <div>address: {part.address}, {part.postal_code}, {part.city}</div>
                    <div>Email: {part.email}</div>
                    <div>Phone Number: {part.phonenr}</div>
                </div>
            );
        case 'language':
            return (
                <div>
                    {part.name}: {part.fluency}
                </div>
            )
        default:
            return null;
    }
};

export default Part;