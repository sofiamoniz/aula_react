import React, {useEffect} from 'react';
import { Link } from "react-router-dom";

function Drivers(props){

    const [driversList, setDriversList] = React.useState([]);
    const [pageSize, setPageSize] = React.useState(20);
    const [page, setPage] = React.useState(1);


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
            </div>
        )
    }

    const changePageForward = () => {
        setPage(page+1);
        fetchState();
    }

    const changePageBackward = () => {
        if(page > 1){
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
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" onClick={changePageBackward}>Previous</a></li>
                    <li className="page-item"><a className="page-link" onClick={changePageForward}>Next</a></li>
                </ul>
            </nav>
        </div>
        
    )
}

export default Drivers;