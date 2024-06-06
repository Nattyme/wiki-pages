;(function () {
    'use strict'

    const articleElement = document.querySelector('#article');

    const id = parseInt(location.search.substring(4))
    //Список всех статей 
    const json = localStorage.getItem('articles')
    const articles = JSON.parse(json)

    let article = null
    for (let i = 0; i < articles.length; i ++) {

        if (articles[i].id === id) {
            article = articles[i]
            }
        console.log(article)
    }

    articleElement.innerHTML = marked.parse(article.content)

})();