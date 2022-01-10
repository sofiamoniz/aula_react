import React, {useEffect} from 'react';
import { Link } from "react-router-dom";

function Drivers(){

    const [driversList, setDriversList] = React.useState([]);
    const [page, setPage] = React.useState(1);
    const pageSize = 20;


    const fetchState = async () => {
        const fetchItem = await fetch('http://192.168.160.58/Formula1/api/Drivers?page=' + page + '&pagesize=' + pageSize);
        const item = await fetchItem.json();
        setDriversList(item.List);
    };

    const Td = ({ children, to }) => {
        // Conditionally wrapping content into a link
        const ContentTag = to ? Link : 'div';
        return (
          <td>
            <ContentTag to={to}>{children}</ContentTag>
          </td>
        );
      }

    
    const retrieveDrivers = () => {
        if (driversList.length){
            return (
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Nationality</th>
                            </tr>
                        </thead>
                        <tbody>
                            {driversList.map(driver =>
                                <tr key={driver.DriverId}>
                                    <Td to={`/DriverDetails/${driver.DriverId}`}>{driver.Name}</Td>
                                    <td>{driver.Nationality}</td>
                                </tr>
                            )}  
                        </tbody>
                    </table>
                    <nav aria-label="Page navigation">
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link" onClick={changePageBackward}>Previous</a></li>
                            <li className="page-item"><a className="page-link" onClick={changePageForward}>Next</a></li>
                        </ul>
                    </nav>
                </div>
            )
        }
        else{
            return(
                <div>
                    <p>Waiting for API to fetch!</p>
                </div>
            )
        }
        
    }

    const changePageForward = () => {
        setPage(page+1);
        fetchState();
    }

    const changePageBackward = () => {
        if (page > 1){
            setPage(page-1);
            fetchState();
        }
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