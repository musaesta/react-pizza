import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';
const Pagination = ({ onChangePage }) => {
	return (
		<ReactPaginate
			className={styles.root}
			nextLabel='>'
			onPageChange={e => onChangePage(e.selected + 1)}
			previousLabel='<'
			pageRangeDisplayed={4}
			pageCount={3}
		/>
	);
};
export default Pagination;
