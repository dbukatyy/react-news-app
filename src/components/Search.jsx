import React, { Component } from 'react';
import PropTypes from 'prop-types';
import sprite from '../sprite.svg';

function Search(props) {

	function search(e) {
		props.onSearch(e.target.value);
	}

	return (
		<form className="search" action="" name="search-form" onSubmit={e => e.preventDefault()}>
			<div className="search__field">
				<input type="text" placeholder="search" onChange={search}/>
				<svg viewBox='0 0 16 16' className="icon icon_search">
				    <use xlinkHref={`${sprite}#icon-search`} />
				</svg>
			</div>
		</form>
	)
}

Search.propTypes = {
	onSearch: PropTypes.func.isRequired
}

export default Search;