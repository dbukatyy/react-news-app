import React, { Component } from 'react';
import PropTypes from 'prop-types';
import sprite from '../sprite.svg';


function Article(props) {

	const articleId = props.id;

	function addLike(e) {
		e.preventDefault();

		props.onLikeAdd(articleId);
	}

	function addWatch(e) {
		props.onWatchedAdd(articleId);
	}


	return (
		<article className="new">
			<h2 className="new__title">
				<a href={props.link} target="_blank" onClick={addWatch}>{props.title}</a>
			</h2>
			<p>{props.description}</p>
			<div className="new__banner">
				<img src={props.img} alt=""/>
			</div>
			<div className="new__icons">
				<a href="" onClick={addLike}>
					<svg viewBox='0 0 16 16' className="icon icon_like">
					    <use xlinkHref={`${sprite}#icon-like`} />
					</svg>
					<span>{props.like}</span>
				</a>
				<a href="">
					<svg viewBox='0 0 16 16' className="icon">
					    <use xlinkHref={`${sprite}#icon-eye`} />
					</svg>
					<span>{props.watched}</span>
				</a>
			</div>
		</article>
	)
}


Article.propTypes = {
	title: PropTypes.string,
	link: PropTypes.string,
	description: PropTypes.string,
	img: PropTypes.string,
	onLikeAdd: PropTypes.func.isRequired,
	onWatchedAdd: PropTypes.func.isRequired,
	id: PropTypes.string,
	like: PropTypes.number
}

Article.defaultProps = {
	like: 0,
	watched: 0
}

export default Article;