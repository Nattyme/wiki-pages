;(function() {
    'use strict'

    const articles = [
        {
            id: 1,
            title: 'название',
            content: 'контент'
        },

        {
            id: 2,
            title: 'название',
            content: 'контент'
        }
    ]

    if (!localStorage.getItem('articles')) {
        localStorage.setItem('articles', JSON.stringify(articles))
    }
    
})();