export function fetchArticles() {
    return fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=006734d12ac947799b7ba8fb0af145fd')
    .then(res => {
        if(!res.ok) {
            throw new Error(`${res.status}`)
        }
        return res.json()
    })
}