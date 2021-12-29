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
                    style={{width: 200, height: 'auto', marginTop:10}}
                />
            )
        }
    }

    useEffect(() => {
        fetchState();
    },[])

    if(driverDetails){
        return(
            <div>
                <div>
                    <h1 style={{marginTop:'5%'}}>{driverDetails.Name}</h1>
                    {retrieveImage(driverDetails.ImageUrl)}
                    <p >Nationality: {driverDetails.Nationality}</p>
                    <a href={driverDetails.Url}>Click here to know more</a>
                    <h3 style={{marginTop: '5%', marginBottom:'5%'}}>Races:</h3>
                    {retrieveRaces()}
                </div>
            </div>
        )
    }
    else{
        return(
            <p>Waiting for API to fetch</p>
        )
    }
   
}

export default DriverDetails;