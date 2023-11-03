import { Link } from 'react-router-dom'
import './ArticlePreviewCard.css'
import { BsBookmarkCheckFill, BsBookmarkCheck } from "react-icons/bs";

const ArticlePreviewCard = ({article, index}) => {

    const bookmarkArticle = () => {
        const currentBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || []
        const updatedBookmarks = currentBookmarks.concat(article)
        localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
    }

    return (
        <div className='article-preview-card'>
            <img className='article-preview-image' src={article.urlToImage} alt=''></img>
            <div className='article-details'>
                <button onClick={bookmarkArticle}>Bookmark</button>
                <h2>{article.title}</h2>
                <p>{article.author}</p>
                <p>{article.description}</p>
                <Link to={`/${index}`}>Read More...</Link>
            </div>
        </div>
    )
}

export default ArticlePreviewCard