import { Link } from 'react-router-dom'
import './ArticlePreviewCard.css'
import { BsBookmarkCheckFill, BsBookmarkCheck } from "react-icons/bs";

const ArticlePreviewCard = ({article}) => {

    return (
        <div className='article-preview-card'>
            <img className='article-preview-image' src={article.urlToImage} alt=''></img>
            <div className='article-details'>
                <h2>{article.title}</h2>
                <p>{article.author}</p>
                <p>{article.description}</p>
            </div>
        </div>
    )
}

export default ArticlePreviewCard