;(function () {
    'use strict'

    const markdownSourceElement = document.querySelector('#markdown-source')
    const markdownResultElement = document.querySelector('#markdown-result')

    markdownSourceElement.value = `## Чёрная дыра
---
    
[Материал из Википедии — свободной энциклопедии]
    
_У этого термина существуют и другие значения, см. [Чёрная дыра (значения).](https://ru.wikipedia.org/wiki/Чёрная_дыра_(значения))_
    
**Чёрная дыра**́ —[ область пространства-времени](https://ru.wikipedia.org/wiki/Пространство-время)^[_Дымникова И. Г._ Чёрные дыры // Физическая энциклопедия. — Т. 5: Стробоскопические приборы — Яркость / Гл. ред. А. М. Прохоров; Ред. кол.: Д. М. Алексеев, А. М. Балдин, А. М. Бонч-Бруевич и др. — М.: Большая российская энциклопедия, 1998. — С. 452—459. — 760 с. — [ISBN 5-85270-101-7.](https://ru.wikipedia.org/wiki/Служебная:Источники_книг/5852701017)], [гравитационное притяжение](https://ru.wikipedia.org/wiki/Гравитация) которой настолько велико, что [покинуть](https://ru.wikipedia.org/wiki/Вторая_космическая_скорость) её не могут даже объекты, движущиеся со [скоростью света,](https://ru.wikipedia.org/wiki/Скорость_света) в том числе [кванты](https://ru.wikipedia.org/wiki/Квант) самого [света](https://ru.wikipedia.org/wiki/Свет). Граница этой области называется [горизонтом событий.](https://ru.wikipedia.org/wiki/Горизонт_событий) В простейшем случае сферически симметричной чёрной дыры он представляет собой сферу [с радиусом Шварцшильда,](https://ru.wikipedia.org/wiki/Гравитационный_радиус) который считается характерным размером чёрной дыры.

    --- 
![Сверхмассивная чёрная дыра](https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/A_view_of_the_M87_supermassive_black_hole_in_polarised_light.tif/lossy-page1-449px-A_view_of_the_M87_supermassive_black_hole_in_polarised_light.tif.jpg)
[Сверхмассивная чёрная дыра](https://ru.wikipedia.org/wiki/Сверхмассивная_чёрная_дыра) в центре галактики [М 87.](https://ru.wikipedia.org/wiki/M_87_(галактика)) Это первое в истории человечества качественное изображение тени чёрной дыры, полученное напрямую в радиодиапазоне ([Event Horizon Telescope](https://ru.wikipedia.org/wiki/Телескоп_горизонта_событий))
    --- 

Теоретическая возможность существования данных областей пространства-времени следует из некоторых точных решений [уравнений Эйнштейна,](https://ru.wikipedia.org/wiki/Уравнения_Эйнштейна) первое^[_Владимир Сурдин._ [Чёрная дыра.](https://www.krugosvet.ru/enc/nauka_i_tehnika/astronomiya/CHERNAYA_DIRA.html) Энциклопедия Кругосвет. Дата обращения: 19 мая 2012. Архивировано 23 июня 2012 года.] из которых было получено [Карлом Шварцшильдом](https://ru.wikipedia.org/wiki/Шварцшильд,_Карл) в [1915 году.](https://ru.wikipedia.org/wiki/1915_год_в_науке) Изобретатель термина достоверно неизвестен^[ _Michael Quinion._ [Black Hole.](https://www.worldwidewords.org/topicalwords/tw-bla1.htm) _World Wide Words._ Дата обращения: 26 ноября 2009. [Архивировано](https://webcitation.org/617i2WQVh?url=http://www.worldwidewords.org/topicalwords/tw-bla1.htm) 22 августа 2011 года.], но само обозначение было популяризовано [Джоном Арчибальдом Уилером](https://ru.wikipedia.org/wiki/Уилер,_Джон_Арчибальд) и впервые публично употреблено в популярной лекции «Наша Вселенная: известное и неизвестное» ([англ.](https://ru.wikipedia.org/wiki/Английский_язык) _Our Universe: the Known and Unknown_) 29 декабря 1967 года[Комм 1]. Ранее подобные астрофизические объекты называли «сколлапсировавшие звёзды» или «коллапсары» (от [англ.](https://ru.wikipedia.org/wiki/Английский_язык) _collapsed stars_), а также «застывшие звёзды» ([англ.](https://ru.wikipedia.org/wiki/Английский_язык) _frozen stars_)^[[Чёрные дыры: Мембранный подход, 1988,](https://ru.wikipedia.org/wiki/Чёрная_дыра#CITEREFЧёрные_дыры:_Мембранный_подход1988) с. 9.].

Различают пять сценариев образования чёрных дыр:

* три реалистичных:
    + [гравитационный коллапс](https://ru.wikipedia.org/wiki/Гравитационный_коллапс) (сжатие) достаточно массивной, либо [нейтронной](https://ru.wikipedia.org/wiki/Предел_Оппенгеймера_—_Волкова) звезды;
    + [килоновая](https://ru.wikipedia.org/wiki/GW170817)
    + коллапс центральной части галактики или протогалактического газа;
* и два гипотетических:
    + формирование чёрных дыр сразу после [Большого взрыва](https://ru.wikipedia.org/wiki/Большой_взрыв) [(первичные чёрные дыры)](https://ru.wikipedia.org/wiki/Первичная_чёрная_дыра);
    + возникновение в [ядерных реакциях](https://ru.wikipedia.org/wiki/Ядерная_реакция) очень высоких энергий.
    
    ---  
### Содержание:
1. Предыстория 
    1.1  «Чёрная звезда» Мичелла (1784—1796)
    1.2  От Мичелла до Шварцшильда (1796—1915) 
2. Решения уравнений Эйнштейна для чёрных дыр 
    `

    markdownSourceElement.addEventListener('keyup', function () {
        const result = marked.parse(markdownSourceElement.value);
        markdownResultElement.innerHTML = result;
    })

})();

