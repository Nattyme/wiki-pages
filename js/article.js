;(function () {
    'use strict'

    const id = parseInt(location.search.substring(4))
    //Список всех статей 
    const json = localStorage.getItem('articles');
    const articles = JSON.parse(json);

})();