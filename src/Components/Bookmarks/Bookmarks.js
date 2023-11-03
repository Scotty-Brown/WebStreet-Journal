import './Bookmarks.css'
import { useEffect, useState } from 'react'
import ArticlePreviewCard from '../ArticlePreview/ArticlePreviewCard/ArticlePreviewCard'

const Bookmarks = () => {
    const [bookmarks, setBookmarks] = useState([])

useEffect(() => {
    setBookmarks(fetchBookmarksFromLocalStorage())
}, [])

const fetchBookmarksFromLocalStorage = () => {
    const storedData = localStorage.getItem('bookmarks')
    if (storedData) {
      return JSON.parse(storedData)
    }
  }

  const bookmarksContainer = bookmarks.map((article) => <ArticlePreviewCard key={article.index} article={article} index={article.index}/>)

  return (
    <div className='article-container'>{bookmarksContainer}</div>
)

}

export default Bookmarks