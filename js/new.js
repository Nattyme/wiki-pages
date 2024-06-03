;(function () {
    'use strict'

    const markdownSourceElement = document.querySelector('#markdown-source')
    const markdownResultElement = document.querySelector('#markdown-result')

    markdownSourceElement.value = 'Вот как-то так!'
    markdownResultElement.innerHTML = `
        <h1>Заголовок статьи</h1>
        <p>Далеко-далеко за <a href="#">словесными горами в стране</a>, гласных и согласных живут рыбные тексты. Использовало однажды гор семь, снова раз. Города большой безорфографичный меня.</p>
        <p>Lorem имени, продолжил своего реторический своих послушавшись грустный даль страну парадигматическая океана рыбными, рыбного переписывается, страна? Свой заголовок свое, он.</p>
        <h2>Заголовок второго уровня</h2>
        <p>Что, повстречался последний всеми его щеке не, знаках встретил использовало, прямо, раз свой. Города силуэт, заглавных всеми, свою прямо но!</p>
        <p>Текстов которой вскоре журчит рекламных свою, сбить на берегу рот. Великий страну проектах знаках над что путь языком, подпоясал, свой они!</p>
        <h3>Заголовок третьего уровня</h3>
        <p>Скатился переулка первую единственное имени над запятых, грустный заголовок переписывается власти переписали. Букв строчка вскоре продолжил, страна злых раз страну.</p>
        <p>Букв переписали, продолжил. Силуэт, путь текста журчит переписывается назад от всех его выйти однажды, бросил букв, путь несколько вскоре даже рукопись.</p> 
    `

    markdownSourceElement.addEventListener('keyup', function () {
        console.log(markdownSourceElement.value)
    })

    console.log(markdownSourceElement)
console.log(markdownResultElement)
})();

