import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setCategoryId } from '../redux/slices/FilterSlice';

// import { setIsLoading } from '../redux/slices/LoadingSlice';

import NotFound from './NotFound';
import Categories from '../components/categories';
import Sort from '../components/sort';
import PizzaBlock from '../components/pizzaBlock';
import { Skeleton } from '../components/pizzaBlock/Skeleton';
import { searchContext } from '../App';
const Home = () => {
	const dispatch = useDispatch();

	const { categoryId, sortRating } = useSelector(state => state.filter);
	// const isLoading = useSelector(state => state.loading.isLoading);

	const _apiBase = 'https://65f43072f54db27bc020bdf5.mockapi.io/items?';
	const [items, setItems] = React.useState([]);
	const [isLoading, setIsloading] = React.useState(true);

	const { searchValue } = React.useContext(searchContext);
	const search = searchValue ? `&search=${searchValue}` : '';
	const onSortCategory = i => {
		dispatch(setCategoryId(i));
	};

	useEffect(() => {
		setIsloading(true);

		axios
			.get(
				`${_apiBase}${search}${
					categoryId === 0 ? '' : `category=${categoryId}`
				}&${
					sortRating !== 'title' ? 'sort' : 'order'
				}By=${sortRating}&order=asc`
			)
			.then(res => {
				setItems(res.data);
				setIsloading(false);
			});
	}, [categoryId, sortRating, search]);
	return (
		<div className='container'>
			<div className='content__top'>
				<Categories onSortCategory={onSortCategory} />
				<Sort />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{isLoading ? (
					[...new Array(6)].map((_, i) => <Skeleton key={i} />)
				) : items === 'Not found' ? (
					<NotFound />
				) : (
					items.map(obj => <PizzaBlock key={obj.id} {...obj} />)
				)}
			</div>
		</div>
	);
};
export default Home;
