import React from 'react';
import './App.css';
import Nav from './components/nav';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import TODOList from './pages/TODOList';
import Drivers from './pages/Drivers';
import DriverDetails from './pages/DriverDetails';

function App() {
  return (
    <div className="App">	
		<Router>
			<Nav />	
			<Routes>
				<Route path='/' exact element={<Home />} />
				<Route path='/TODOList' element={<TODOList />} />
				<Route path='/Drivers' element={<Drivers />} />
				<Route path='/DriverDetails/:id' element={<DriverDetails />} />
			</Routes>
		</Router>	
	</div>
  );
}

export default App;
