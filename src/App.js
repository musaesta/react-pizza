import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import './scss/app.scss';

function App() {
	const [searchValue, setSearchValue] = useState('');
	return (
		<div className='wrapper'>
			<Header searchValue={searchValue} setSearchValue={setSearchValue} />
			<div className='content'>
				<Routes>
					<Route path='/' element={<Home searchValue={searchValue} />} />
					<Route path='cart.html' element={<Cart />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
