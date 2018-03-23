import React, { Component } from 'react';
import PropTypes from 'prop-types';
	
const date = new Date();


function Header(props) {

	return (
		<header className="header">
			<h1>{props.title}</h1>
			<time>{date.toLocaleDateString()}</time>
		</header>
	)
}

Header.propTypes = {
	title: PropTypes.string
}

Header.defaultProps = {
	title: "Page title"
}

export default Header;
