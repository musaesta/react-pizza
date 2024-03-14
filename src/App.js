import Header from './components/header/Header';
import Categories from './components/categories/Categories';
import Sort from './components/sort/Sort';
import PizzaBlock from './components/pizza-block/pizza-block';
import pizzas from './assets/pizzas.json';
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
						{pizzas.map(({ title, price, imageUrl, id, sizes, types }) => (
							<PizzaBlock
								key={id}
								title={title}
								price={price}
								sizes={sizes}
								types={types}
								imageUrl={imageUrl}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
