;(function () {
    'use strict'

    const markdownSourceElement = document.querySelector('#markdown-source')
    const markdownResultElement = document.querySelector('#markdown-result')
    const saveArticleButton = document.querySelector('#save-article-button')
    const articleTitleElement = document.querySelector('#article-title')

    const id = parseInt(location.search.substring(4))
     //Список всех статей 
     const json = localStorage.getItem('articles')
     const articles = JSON.parse(json)

    // Если у статьи есть id, то значит  мы редактируем статью
    if (id) {
        let article = null
        for (let i = 0; i < articles.length; i ++) {

            if (articles[i].id === id) {
                article = articles[i]
            }
        }
        markdownSourceElement.value = article.content
        articleTitleElement.value = article.title
        const result = marked.parse(markdownSourceElement.value);
        markdownResultElement.innerHTML = result;
    }

    markdownSourceElement.addEventListener('keyup', function () {
        const result = marked.parse(markdownSourceElement.value);
        markdownResultElement.innerHTML = result;
    })

    saveArticleButton.addEventListener('click', function(){
        if (id) {
            for (let i =0; i < articles.length; i++ ) {
                if (articles[i].id === id) {
                    articles[i].title = articleTitleElement.value
                    articles[i].content = markdownSourceElement.value
                }
            }
        }

        else {
            //По клику на кнопку получаем данные новой статьи. Забираем все нудные данные их DOM элементов
            const newArticle = {
                id: 0,
                title: articleTitleElement.value,
                content: markdownSourceElement.value
            }

            // Вычисляем для id новой статьи
            newArticle.id = articles.length + 1
            // Добавляем новуб статью в конец массива
            articles.push(newArticle) 
        }
            
        // Добавляем статьи в локальное хранилище, преобразвав в строку
        localStorage.setItem('articles', JSON.stringify(articles))
        if (id >= 0) {
            location.replace('article.html?id=' + id)
        }
        else {
            location.replace('article.html?id=' + articles[articles.length - 1].id)
        }
    })

})();

