import React from 'react';
import Header from './components/header/Header';
import Categories from './components/categories/Categories';
import Sort from './components/sort/Sort';
import PizzaBlock from './components/pizza-block/pizza-block';

import './scss/app.scss';

function App() {
	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<div className='container'>
					<div className='content__top'>
						<Categories />
						<Sort />
					</div>
					<h2 className='content__title'>Все пиццы</h2>
					<div className='content__items'>
						<PizzaBlock title='Мексиканская' price='555' />
						<PizzaBlock title='Чизбургер-пицца' price='500' />
						<PizzaBlock title='Мексиканская' price='555' />
						<PizzaBlock title='Мексиканская' price='555' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
