import React, {useEffect} from 'react';

function Drivers(){

    
    const [driversList, setDriversList] = React.useState([]);

    const fetchState = async () => {
        const fetchItem = await fetch('http://192.168.160.58/Formula1/api/Drivers');
        const item = await fetchItem.json();
        setDriversList(item.List);
    };
    
    const retrieveDrivers = () => {
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Nationality</th>
                        </tr>
                    </thead>
                    <tbody>
                        {driversList.map(driver =>
                            <tr>
                                <td>{driver.Name}</td>
                                <td>{driver.Nationality}</td>
                            </tr>
                        )}  
                    </tbody>
                </table>
            </div>
        )
    }
    

    useEffect(() => {
        fetchState();
    },[])

    return(
        <div>
            <h1>Get to know the drivers</h1>
            {retrieveDrivers()}
        </div>
        
    )
}

export default Drivers;