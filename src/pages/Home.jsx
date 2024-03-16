import React from 'react';

import Categories from '../components/categories';
import Sort from '../components/sort';
import PizzaBlock from '../components/pizzaBlock';
import { Skeleton } from '../components/pizzaBlock/Skeleton';
const Home = () => {
	const [items, setItems] = React.useState([]);
	const [isLoading, setIsloading] = React.useState(true);

	const getData = async () => {
		const res = await fetch(
			'https://65f43072f54db27bc020bdf5.mockapi.io/items'
		).then(res => res.json());
		setIsloading(isLoading => !isLoading);
		return setItems(res);
	};
	React.useEffect(() => {
		getData();
	}, []);
	return (
		<>
			<div className='content__top'>
				<Categories />
				<Sort />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{isLoading
					? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
					: items.map(({ title, price, imageUrl, id, sizes, types }) => (
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
		</>
	);
};
export default Home;
