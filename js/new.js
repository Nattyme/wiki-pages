;(function () {
    'use strict'

    const markdownSourceElement = document.querySelector('#markdown-source')
    const markdownResultElement = document.querySelector('#markdown-result')
    const saveArticleButton = document.querySelector('#save-article-button')
    const articleTitleElement = document.querySelector('#article-title')

    const id = parseInt(location.search.substring(4))

    if (id >= 0) {
        //Список всех статей 
        const json = localStorage.getItem('articles')
        const articles = JSON.parse(json)

        let article = null
        for (let i = 0; i < articles.length; i ++) {

            if (articles[i].id === id) {
                article = articles[i]
            }
        }
        markdownSourceElement.value = article.content
        articleTitleElement.value = article.title
    }

    markdownSourceElement.addEventListener('keyup', function () {
        const result = marked.parse(markdownSourceElement.value);
        markdownResultElement.innerHTML = result;
    })

    saveArticleButton.addEventListener('click', function(){
        //По клику на кнопку получаем данные новой статьи. Забираем все нудные данные их DOM элементов
        const newArticle = {
            id: 0,
            title: articleTitleElement.value,
            content: markdownSourceElement.value
        }

        // Получаем данные  всех статьей из локального хранилища в виде строки
        const json = localStorage.getItem('articles')
        // Преоьразуем строку в объект
        const articles = JSON.parse(json)

        // Вычисляем для id новой статьи
        newArticle.id = articles.length + 1
        // Добавляем новуб статью в конец массива
        articles.push(newArticle)
        // Добавляем статьи в локальное хранилище, преобразвав в строку
        localStorage.setItem('articles', JSON.stringify(articles)) 
    })

})();

