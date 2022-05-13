import React from 'react';

const SearchBox = ({searchChange}) => {
	return(
		<div className='tc ma2'>
			<input className='tc br2 ba b--green bg--lightest-blue pa3' type='search' 
			placeholder='search your robots' 
			onChange= {searchChange} />
		</div>
	);
}

export default SearchBox;