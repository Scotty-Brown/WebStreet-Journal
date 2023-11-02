import { Link } from 'react-router-dom'
import './ArticlePreviewCard.css'

const ArticlePreviewCard = ({article}) => {
    return (
        <div className='article-preview-card'>
            <img src={article.urlToImage}></img>
            <h2>{article.title}</h2>
            <p>{article.author}</p>
            <p>{article.description}</p>
        </div>
    )
}

export default ArticlePreviewCard