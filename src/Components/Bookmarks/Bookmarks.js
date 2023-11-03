import './Bookmarks.css'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import ArticlePreviewCard from '../ArticlePreview/ArticlePreviewCard/ArticlePreviewCard'

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([])

  useEffect(() => {
    fetchBookmarksFromLocalStorage()
  }, [])

  const fetchBookmarksFromLocalStorage = () => {
    const storedData = localStorage.getItem('bookmarks')
    if (storedData.length !== bookmarks.length) {
      setBookmarks(JSON.parse(storedData))
    }
  }

  const removeArticleFromBookmarks = (articleIndex) => {
    const updatedBookmarks = bookmarks.filter(
      (bookmark) => bookmark.index !== articleIndex
    )
    setBookmarks(updatedBookmarks)
  }

  const bookmarksContainer = bookmarks?.map((article) => (
    <ArticlePreviewCard
      key={article.index}
      article={article}
      index={article.index}
      removeArticleFromBookmarks={removeArticleFromBookmarks}
    />
  ))

  return (
    <div className="article-container">
      {!bookmarksContainer.length ? (
        <div className="empty-bookmarks">
          <p>Looks like you haven't bookmarked any articles yet!</p>
          <NavLink to={'/'}>Return Home</NavLink>
        </div>
      ) : (
        bookmarksContainer
      )}
    </div>
  )
}

export default Bookmarks
