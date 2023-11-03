import { Link } from 'react-router-dom'
import './ArticlePreviewCard.css'
import { BsBookmarkCheckFill, BsBookmarkCheck } from 'react-icons/bs'
import { useEffect, useState } from 'react'

const ArticlePreviewCard = ({ article, index, removeArticleFromBookmarks }) => {
  const [bookmarked, setBookmarked] = useState(false)

  useEffect(() => {}, [bookmarked])

  const bookmarkArticle = () => {
    const currentBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || []
    const articleWithIndex = { ...article, index: index, isBookmarked: true }
    const updatedBookmarks = currentBookmarks.concat(articleWithIndex)
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks))
    setBookmarked(true)
  }

  const removeBookmark = () => {
    const currentBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || []
    const updatedBookmarks = currentBookmarks.filter(
      (bookmark) => bookmark.index !== index
    )
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks))
    if (removeArticleFromBookmarks) {
      return removeArticleFromBookmarks(index)
    }
    setBookmarked(false)
  }

  function isArticleBookmarked(index) {
    const currentBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || []
    return currentBookmarks.some((bookmark) => bookmark.index === index)
  }

  const isBookmarked = isArticleBookmarked(index)

  return (
    <div className="article-preview-card">
      <img
        className="article-preview-image"
        src={article.urlToImage}
        alt=""
      ></img>
      <div className="article-details">
        {!isBookmarked ? (
          <div className='flex-row'>
          <p>Bookmark to read later 👉🏼</p>
          <button className='bookmark-btn' onClick={bookmarkArticle}>{<BsBookmarkCheck/>}</button>
          </div>
        ) : (
          <div className='flex-row'>
            <p>All done! Click to remove 👉🏼</p>
          <button className='bookmark-btn' onClick={removeBookmark}>{<BsBookmarkCheckFill/>}</button>
          </div>
        )}
        <h2>{article.title}</h2>
        <p className='author'>Author: {article.author}</p>
        <p className='description'>{article.description}</p>
        <Link to={`/${index}`}>Click to Read More...</Link>
      </div>
    </div>
  )
}

export default ArticlePreviewCard
