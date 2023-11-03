import { useParams } from 'react-router-dom'
import './SingleArticle.css'
import { useEffect, useState } from 'react'

const SingleArticle = ({articles}) => {
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
        <div className='article-preview-card'>
        <img className='article-preview-image' src={article.urlToImage} alt=''></img>
        <div className='article-details'>
            <h2>{article.title}</h2>
            <p>{article.publishedAt}</p>
            <p>{article.author}</p>
            <p>{article.description}</p>
            <p>{article.content}</p>
            <p>{article.url}</p>
        </div>
    </div>
    )
}

export default SingleArticle