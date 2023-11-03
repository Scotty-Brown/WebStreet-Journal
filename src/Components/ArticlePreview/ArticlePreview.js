import './ArticlePreview.css'
import ArticlePreviewCard from './ArticlePreviewCard/ArticlePreviewCard'

const ArticlePreview = ({articles}) => {

    const articleContainer = articles.map((article, index) => <ArticlePreviewCard key={index} article={article} index={index}/>)

    return (
        <div className='article-container'>{articleContainer}</div>
    )
}

export default ArticlePreview