import React from 'react'

import { PartProps } from "../types";

const Part = (props: PartProps) => {
    const { part } = props;

    switch (part.kind) {
        case "personal":
            return (
                <div>
                    <div>{part.name}</div>
                    <div>{part.birth_date}</div>
                    <div>{part.address}, {part.postal_code}, {part.city}</div>
                    <div>{part.email}</div>
                    <div>{part.phonenr}</div>
                </div>
            );
        case 'language':
            return (
                <div>
                    {part.fluency}
                </div>
            )
        default:
            return null;
    }
};

export default Part;