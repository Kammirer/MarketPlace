// найти все ссылки в tabs-controls
// найти все блоки tab-pane
// при клике на пункт tabs-controls должны определить какой блок будет показан
// удаляем во всех tab-pane классы active
// удаляем во всех tabs-controls классы active
// добавляем класс active в необходимые для показа tabs-controls и tab-pane

let tabsControls = $('.tabs-controls a');
let tabPane = $('.tab-pane');

// элемент.on(название события, обработчик события в виде функции)
tabsControls.on('click', function(e){
    // отмена стандартного действия браузера (обновление страницы, например)
    e.preventDefault();

    // создать переменнуюв которой будет храниться то, что хранится в data-tabs
    let target = $(e.target).attr('data-tabs'); 

    // получить сам елемент $target
    tabPane.removeClass('active');
    tabsControls.removeClass('active');
    // добавить класс active на tab-pane
    $(target).addClass('active');
    $(e.target).addClass('active');
})