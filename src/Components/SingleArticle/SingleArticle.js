import { useParams } from 'react-router-dom'
import './SingleArticle.css'
import { useEffect, useState } from 'react'

const SingleArticle = () => {
  const [article, setArticle] = useState({})
  const index = useParams().index

  useEffect(() => {
    setArticle(fetchArticleFromLocalStorage())
  }, [])

  const fetchArticleFromLocalStorage = () => {
    const storedData = localStorage.getItem('articleData')
    if (storedData) {
      return JSON.parse(storedData)[index]
    }
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
        <p>{article.publishedAt}</p>
        <p>{article.author}</p>
        <p>{article.description}</p>
        <p>{article.content}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  )
}

export default SingleArticle
