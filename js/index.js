;(function () {
    'use strict'

    const markdownResultElement = document.querySelector('#markdown-result');
    const lastArticlesListElement = document.querySelector('#last-articles');
    const allArticlesListElement = document.querySelector('#all-articles');
    const readArticleButton = document.querySelector('#read-article');

    //Список всех статей 
    const json = localStorage.getItem('articles');
    const articles = JSON.parse(json);

    console.log(articles);

    const article = articles[articles.length - 1];
    console.log(article);

})();