import React from 'react';
import NotFound from './NotFound';
import Categories from '../components/categories';
import Sort from '../components/sort';
import PizzaBlock from '../components/pizzaBlock';
import { Skeleton } from '../components/pizzaBlock/Skeleton';
const Home = () => {
	const _apiBase = 'https://65f43072f54db27bc020bdf5.mockapi.io/items?';
	const [items, setItems] = React.useState([]);
	const [isLoading, setIsloading] = React.useState(true);
	const [sortCategory, setSortCategory] = React.useState(0);
	const [sortRating, setSortRating] = React.useState('rating');

	const onSortCategory = i => {
		setSortCategory(i);
	};
	const onSortRating = i => {
		setSortRating(i);
	};
	const getData = async () => {
		const res = await fetch(
			`${_apiBase}${sortCategory === 0 ? '' : `category=${sortCategory}`}&${
				sortRating !== 'title' ? 'sort' : 'order'
			}By=${sortRating}&order=asc`
		).then(res => res.json());

		setIsloading(false);

		return setItems(res);
	};
	React.useEffect(() => {
		setIsloading(true);
		getData(sortCategory);

		window.scrollTo(0, 0);
	}, [sortCategory, sortRating]);
	return (
		<div className='container'>
			<div className='content__top'>
				<Categories onSortCategory={onSortCategory} />
				<Sort onSortRating={onSortRating} />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{isLoading ? (
					[...new Array(6)].map((_, i) => <Skeleton key={i} />)
				) : items === 'Not found' ? (
					<NotFound />
				) : (
					items.map(({ title, price, imageUrl, id, sizes, types }) => (
						<PizzaBlock
							key={id}
							title={title}
							price={price}
							sizes={sizes}
							types={types}
							imageUrl={imageUrl}
						/>
					))
				)}
			</div>
		</div>
	);
};
export default Home;
