import React from 'react'

import Part from './Part';
import { CvProps } from "../types";

const CvContent = (props: CvProps) => {
    const { cvParts } = props;
    return (
        <div>
            {cvParts.map((part, index) => (
                <Part key={index} part={part} />
            ))}
        </div>
    )
}

export default CvContent;