import React from 'react';
import './App.css';
import Nav from './components/nav';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import TODOList from './pages/TODOList';


function App() {
  return (
    <div className="App">	
		<Router>
			<Nav />	
			<Routes>
				<Route path='/' exact element={<Home />} />
				<Route path='/TODOList' element={<TODOList />} />
			</Routes>
		</Router>	
	</div>

  );
}

export default App;
