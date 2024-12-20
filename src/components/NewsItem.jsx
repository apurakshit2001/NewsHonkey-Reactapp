import React, { Component } from 'react'
import './NewsItem.css';
export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className='m-3'>
                <div className="card" >
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
                            style={{ left: '80%', zIndex: 1 }}>
                            {source}
                        </span>
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className='text-muted'>By {author} on {date}</small></p>
                        <a href={newsUrl} className="btn btn-sm btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div >
        )
    }
}

export default NewsItem
