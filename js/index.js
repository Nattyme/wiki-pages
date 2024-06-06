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

    // Вывести список всех статей
    let str = ''
    for (let i = 0; i < articles.length; i++) {
        const currentArticle = articles[i]
        str = str + '<li class="other-list__item"><a class="other-list__link" href="article.html?id=' + currentArticle.id + ' ">' + currentArticle.title +'</a></li>'
        }
    allArticlesListElement.innerHTML = str

    //Вывести список трех последних статей
    str = ''
    for (let i = articles.length - 3; i < articles.length; i++) {
        console.log(i)
        const currentArticle = articles[i]
        str = str + '<li class="articles-list-item"><a href="article.html" class="articles-list-link">' + currentArticle.title + '</a></li>'
        }
    lastArticlesListElement.innerHTML = str;

     // Кнопка при нажатии открывает последнюю статью
     readArticleButton.addEventListener('click', function (){
        location.replace('article.html?id=' + article.id)
    })

})();