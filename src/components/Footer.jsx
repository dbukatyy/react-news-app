import React, { Component } from 'react';
import PropTypes from 'prop-types';

function Footer(props) {
	return (
		<footer className="footer">Contact us – <a href={`mailto: ${props.mail}`}>{props.mail}</a></footer>
	)
}

Footer.propTypes = {
	mail: PropTypes.string
}

export default Footer;