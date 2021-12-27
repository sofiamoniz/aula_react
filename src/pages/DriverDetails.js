import React from 'react';
import { useParams } from "react-router-dom";

function DriverDetails(){
    const { id } = useParams()
    return(
        <div>
            <h1>Welcome to DriverDetails! {id}</h1>
        </div>
        
    )
}

export default DriverDetails;