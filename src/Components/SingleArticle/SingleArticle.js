import { useNavigate, useParams } from 'react-router-dom'
import './SingleArticle.css'
import { useEffect, useState } from 'react'

const SingleArticle = () => {
  const [article, setArticle] = useState({})
  const index = useParams().index
  const navigate = useNavigate()

  useEffect(() => {
    setArticle(fetchArticleFromLocalStorage())
  }, [])

  const fetchArticleFromLocalStorage = () => {
    const storedData = localStorage.getItem('articleData')
    if (storedData) {
      return JSON.parse(storedData)[index]
    }
  }

  const returnHome = () => {
    navigate('/')
  }

  const returnToBookmarks = () => {
    navigate('/bookmarks')
  }

  return (
    <div className="single-article-card">
      <img
        className="single-article-image"
        src={article.urlToImage}
        alt=""
      ></img>
      <div className="single-article-details">
        <h2>{article.title}</h2>
        <p>Published: {article.publishedAt}</p>
        <p>Author: {article.author}</p>
        <p>Description: {article.description}</p>
        <div className="article-content">
          <p>Content: {article.content}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Click to read more on wsj.com
          </a>
        </div>
        <button className='return-btn' onClick={returnHome}>Return Home</button>
        <button className='return-btn' onClick={returnToBookmarks}>Return to Bookmarks</button>
      </div>
    </div>
  )
}

export default SingleArticle
