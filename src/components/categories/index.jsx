import React from 'react';
function Categories() {
	const [activeIndex, setActiveIndex] = React.useState(0);
	const listItem = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	];

	const onclickCategory = id => {
		setActiveIndex(id);
	};

	return (
		<div className='categories'>
			<ul>
				{listItem.map((item, i) => {
					return (
						<li
							key={i}
							onClick={() => onclickCategory(i)}
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
