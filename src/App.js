import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import './scss/app.scss';

export const searchContext = React.createContext('');
function App() {
	const [searchValue, setSearchValue] = useState('');
	return (
		<div className='wrapper'>
			<searchContext.Provider value={{ searchValue, setSearchValue }}>
				<Header />
				<div className='content'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='cart.html' element={<Cart />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</div>
			</searchContext.Provider>
		</div>
	);
}

export default App;
