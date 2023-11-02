import './ArticlePreview.css'
import ArticlePreviewCard from './ArticlePreviewCard/ArticlePreviewCard'

const ArticlePreview = ({articles}) => {

    const articleContainer = articles.map(article => <ArticlePreviewCard article={article}/>)

    return (
        <div className='article-container'>{articleContainer}</div>
    )
}

export default ArticlePreview