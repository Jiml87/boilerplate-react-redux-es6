import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getNews } from '../../store/modules/news'

import './News.scss'

class News extends Component {
    componentDidMount() {
        this.props.getListNews()
    }
    renderItemNews = (item) => {
        // console.log(item)
        const { url, title, multimedia } = item
        return (
            <a
                className="card"
                href={url}
                target="_blank"
                key={item.created_date}
            >
                {!!multimedia.length &&
                    <img
                        className="card-img-top"
                        src={multimedia[4].url}
                        alt=""
                    />
                }
                <div className="card-block">
                    <p className="card-text">{title}</p>
                </div>
            </a>
        )
    }
    
    render() {
        return (
            <div id="news_wraper" className="">
                <div className="container d-flex flex-column justify-content-between">
                    <div className="section_preview d-flex justify-content-between flex-wrap">
                        {this.props.status.cata({
                            NotAsked: () => null,
                            Loading: () => <div>Loading...</div>,
                            Updated: () => <div>Loading...</div>,
                            Succeeded: () => (
                                this.props.news.map(i => this.renderItemNews(i))
                            ),

                        })}
                    </div>
                    <footer>
                        <img src="http://static01.nytimes.com/packages/images/developer/logos/poweredby_nytimes_150a.png" alt="" />
                    </footer>
                </div>
            </div>
        )
    }
}


News.propTypes = {
    news: PropTypes.arrayOf.isRequired,
    getListNews: PropTypes.func.isRequired,
    status: PropTypes.objectOf({
        cata: PropTypes.func.isRequired,
    }).isRequired,
}


export default connect(
    state => ({
        news: state.news.newsData,
        status: state.news.statusNewsData,
    }),
    dispatch => ({
        getListNews() {
            dispatch(getNews())
        },
    }),
)(News)
