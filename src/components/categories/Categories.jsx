import React from 'react';
function Categories() {
	const [activeIndex, setActiveIndex] = React.useState(0);
	const categories = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	];

	const onclickCategory = e => {
		const id = +e.target.id;

		setActiveIndex(id);
	};

	return (
		<div className='categories'>
			<ul>
				{categories.map((item, i) => {
					return (
						<li
							id={i}
							key={i}
							onClick={onclickCategory}
							className={activeIndex === i ? 'active' : ''}
						>
							{item}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
export default Categories;
