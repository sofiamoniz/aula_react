import React, {useEffect} from 'react';
import { useParams } from "react-router-dom";

function DriverDetails(){

    const { id } = useParams()
    const [driverDetails, setDriverDetails] = React.useState([]);
    const [driverRaces, setDriverRaces] = React.useState([]);


    const fetchState = async () => {
        const fetchItem = await fetch('http://192.168.160.58/Formula1/api/Drivers/Driver?id=' + id);
        const item = await fetchItem.json();
        setDriverDetails(item);
        setDriverRaces(item.Races);
    };

    const retrieveRaces = () => {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Circuit Name</th>
                            <th scope="col">Year</th>
                            <th scope="col">Race Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {driverRaces.map(race =>
                            <tr key={race.RaceId}>
                                <td>{race.CircuitName}</td>
                                <td>{race.Year}</td>
                                <td>{race.Name}</td>
                                <td></td>
                            </tr>
                        )}  
                    </tbody>
                </table>
            </div>
        )
    }

    const retrieveImage = (image) =>{
        if(image != null){
            return(
                <img 
                    src={image}
                    alt="new"
                />
            )
        }
    }

    useEffect(() => {
        fetchState();
    },[])


    return(
        <div>
            <div>
                <h3>{driverDetails.Name}</h3>
                {retrieveImage(driverDetails.ImageUrl)}
                <h2>Races:</h2>
                {retrieveRaces()}
            </div>
        </div>
        
    )
}

export default DriverDetails;