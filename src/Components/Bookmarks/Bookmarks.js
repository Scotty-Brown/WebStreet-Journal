import './Bookmarks.css'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import ArticlePreviewCard from '../ArticlePreview/ArticlePreviewCard/ArticlePreviewCard'

const Bookmarks = () => {
    const [bookmarks, setBookmarks] = useState([])
    const currentBookmarks = JSON.parse(localStorage.getItem('bookmarks')) 
    

useEffect(() => {
    setBookmarks(fetchBookmarksFromLocalStorage())
}, [currentBookmarks])

const fetchBookmarksFromLocalStorage = () => {
    const storedData = localStorage.getItem('bookmarks')
    if (storedData) {
      return JSON.parse(storedData)
    }
  }

  const bookmarksContainer = bookmarks?.map((article) => <ArticlePreviewCard key={article.index} article={article} index={article.index} />)

  return (
    <div className='article-container'>
        {!bookmarksContainer.length ? (
        <div className='empty-bookmarks'>
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