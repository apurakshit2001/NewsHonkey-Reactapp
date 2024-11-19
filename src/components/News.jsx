import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {

    static defaultProps = {
        country: 'us',
        pageSize: 8,
        category: 'general'
    }


    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        };
    }

    async fetchNews(page) {
        this.props.setProgress(10)
        try {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${page}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true });
            this.props.setProgress(30)
            let response = await fetch(url);
            let data = await response.json();
            this.setState({ articles: data.articles, loading: false });
            this.props.setProgress(70)
        } catch (error) {
            console.error("Error fetching news articles:", error);
            this.setState({ loading: false });
        }
        this.props.setProgress(100)
    }

    componentDidMount() {
        this.fetchNews(this.state.page);
    }

    handlePrevclick = () => {
        const newPage = this.state.page - 1;
        if (newPage > 0) {
            this.setState({ page: newPage }, () => this.fetchNews(newPage));
        }
    }

    handleNextclick = () => {
        if (this.state.articles.length === 0) return;
        const newPage = this.state.page + 1;
        this.setState({ page: newPage }, () => this.fetchNews(newPage));
    }

    render() {
        return (
            <div className="container my-3">
                <h2 className='text-center'>NewsMonkey - Top Headlines</h2>
                {this.state.loading ? (
                    <Spinner />
                ) : (
                    <div className="d-flex flex-row flex-wrap justify-content-center">
                        {this.state.articles?.map((article) => (
                            <NewsItem
                                key={article.url}
                                title={article.title?.slice(0, 45) || "No Title Available"}
                                description={article.description?.slice(0, 88) || "No Description Available"}
                                imageUrl={article.urlToImage || 'https://as1.ftcdn.net/v2/jpg/02/43/70/42/1000_F_243704249_ulKzLuknUin9WGaCkG0TiSjAVCLZ5h4p.jpg'}
                                newsUrl={article.url}
                                author={article.author || "Unknown Author"}
                                date={article.publishedAt ? new Date(article.publishedAt).toGMTString() : "Unknown Date"}
                                source={article.source?.name || "Unknown Source"}
                            />
                        ))}

                    </div>
                )}
                <div className="d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrevclick}>&larr; Previous</button>
                    <button type="button" disabled={this.state.articles.length === 0} className="btn btn-dark" onClick={this.handleNextclick}>Next &rarr;</button>
                </div>
            </div>
        );
    }
}
