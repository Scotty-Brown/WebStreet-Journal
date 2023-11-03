import './App.css'
import { Routes, Route } from 'react-router-dom'
import { fetchArticles } from './apiCalls'
import { useEffect, useState } from 'react'
import { sampleData } from './sampleData'
import Header from './Components/Header/Header'
import ArticlePreview from './Components/ArticlePreview/ArticlePreview'
import SingleArticle from './Components/SingleArticle/SingleArticle'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {
  const [articles, setArticles] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    // fetchArticles()
    // .then(data => {
    //   localStorage.setItem('articleData', JSON.stringify(data.articles))
    //   setArticles(data.articles)
    // })
    // .catch(error => setError(error.message))
    localStorage.setItem('articleData', JSON.stringify(sampleData.articles))
    setArticles(sampleData.articles)
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ArticlePreview articles={articles} />} />
        <Route path="/:index" element={<SingleArticle />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
    </div>
  )
}

export default App
