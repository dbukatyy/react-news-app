import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Article from './components/Article';
import Search from './components/Search';
import Footer from './components/Footer';


const url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'pageSize=5&' +
          'apiKey=304ae5bfaeab4d51854ee3f239a22570';

const req = new Request(url);

let initialData = [];

class App extends Component {
	
  constructor(props) {
  	super(props);

  	this.state = {
  		articles: [],
  		loaded: false
  	};

  	this.paramAdd = this.paramAdd.bind(this);
  	this.search = this.search.bind(this);
  }

  paramAdd(id, param) {
	const articles = this.state.articles.map( article => {
		if (article.publishedAt === id) {
			article[param] ? article[param] += 1 : article[param] = 1;
		}

		return article;
	})

	this.setState({articles});
  }

  search(req) {
  	const searchString = req.toUpperCase();
	const articles = initialData.filter( article => {
			const searchText = article.description.toUpperCase() + article.title.toUpperCase();
			return searchText.includes(searchString);
		})

	this.setState({articles});
  }

  componentWillMount() {
  	fetch(req)
    	.then(response => response.json())
    	.then(data => {
    		this.setState({
    			articles: data.articles,
    			loaded: true
    		});

    		initialData = data.articles;
    	})
  }

  render() {
    return (
    	<div className="wrapper">
      		<Header title="News App" />
 		    <main className="main">
 		    	<Search onSearch={this.search}/>
				<div className="articles">
	 		    	{this.state.loaded ? 
							this.state.articles.map(article =>
								<Article 
									key={article.publishedAt}
									id={article.publishedAt}
									title={article.title}
									link={article.url}
									description={article.description}
									img={article.urlToImage}
									like={article.like}
									watched={article.watched}
									onParamAdd={this.paramAdd}
								/>
							)
						:
						<p className="preloader">Loading...</p>
					}
				</div>
 		    </main>
 		    <Footer mail="news-company@gmail.com" />
      	</div>
    );
  }
}

export default App;
