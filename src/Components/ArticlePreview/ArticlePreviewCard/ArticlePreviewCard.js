import { Link } from 'react-router-dom'
import './ArticlePreviewCard.css'
import { BsBookmarkCheckFill, BsBookmarkCheck } from "react-icons/bs";
import { useEffect, useState } from 'react';

const ArticlePreviewCard = ({article, index, removeArticleFromBookmarks}) => {
    const [bookmarked, setBookmarked] = useState(false)

    useEffect(() => {

    }, [bookmarked])
    
    const bookmarkArticle = () => {
        const currentBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || []
        const articleWithIndex = { ...article, index: index, isBookmarked: true }
        const updatedBookmarks = currentBookmarks.concat(articleWithIndex)
        localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks))
        setBookmarked(true)
    }

    const removeBookmark = () => {
        const currentBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || []
        const updatedBookmarks = currentBookmarks.filter(bookmark => bookmark.index !== index)
        localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks))
        if (removeArticleFromBookmarks) {
            return removeArticleFromBookmarks(index)}
        setBookmarked(false)
      }

      function isArticleBookmarked(index) {
        const currentBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || []
        return currentBookmarks.some((bookmark) => bookmark.index === index)
      }

      const isBookmarked = isArticleBookmarked(index)

    return (
        <div className='article-preview-card'>
            <img className='article-preview-image' src={article.urlToImage} alt=''></img>
            <div className='article-details'>
                {!isBookmarked ? (
                    <button onClick={bookmarkArticle}>Bookmark</button>

                ) : (
                    <button onClick={removeBookmark}>Remove Bookmark</button>
                )}
                <h2>{article.title}</h2>
                <p>{article.author}</p>
                <p>{article.description}</p>
                <Link to={`/${index}`}>Read More...</Link>
            </div>
        </div>
    )
}

export default ArticlePreviewCard