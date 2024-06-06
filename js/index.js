;(function () {
    'use strict'

    const markdownResultElement = document.querySelector('#markdown-result');
    const lastArticlesListElement = document.querySelector('#last-articles');
    const allArticlesListElement = document.querySelector('#all-articles');
    const readArticleButton = document.querySelector('#read-article');

    //Список всех статей 
    const json = localStorage.getItem('articles');
    const articles = JSON.parse(json);
    //Находим последнюю статью
    const article = articles[articles.length - 2];

    //Опубликовать 200 символов последней из добавленных статьей
    markdownResultElement.innerHTML = marked.parse(article.content.substr(0, 200) + '...');

    let str = ''
    for (let i = 0; i < articles.length; i++) {
        const currentArticle = articles[i]
        str = str + '<li class="other-list__item"><a class="other-list__link" href="#">' + currentArticle.title +'</a></li>'
        }
    allArticlesListElement.innerHTML = str
    
})();