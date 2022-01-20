function getThemes(userPart, userChapter, userStyle) {

    let parts = document.getElementsByClassName('tabs__content');

    if (parts[userPart - 1] == undefined) {
        console.warn(`Curently there are only ${parts.length} parts in https://learn.javascript.ru/. Therefore the first argument takes only numbers from 1 to ${parts.length}`);
        return
    }

    let part = parts[userPart - 1];
    let chapters = part.querySelectorAll('.list__item');

    if (chapters[userChapter - 1] == undefined) {
        console.warn(`Curently there are only ${chapters.length} chapters in ${userPart} part of https://learn.javascript.ru/. Therefore the second argument takes only numbers from 1 to ${chapters.length}`);
        return
    }
    if (userStyle !== 'number' && userStyle !== 'dash' && userStyle !== 'current') {
        console.warn('Third argument takes one of the following values: number, dash, current');
        return
    }
    
    let chapter = chapters[userChapter - 1];
    let chapterName = chapter.querySelector('.list__link').textContent;
    let themes = chapter.querySelectorAll('.list-sub__link');
    let index = 1;

    console.log(`%c${chapterName}`, 'font-weight: bold');

    for (let theme of themes) {
        if (userStyle == 'number') {
            console.log(index + ' ' + theme.textContent);
            index++;
        }
        if (userStyle == 'dash') {
            console.log('-', theme.textContent);
        }
        if (userStyle == 'current') {
            console.log(userChapter + '.' + index, theme.textContent);
            index++
        }
    }
}

 // let themeIndex = getComputedStyle(chapter.querySelectorAll('.list-sub__title'), ':before').getPropertyValue('content');

//  if (document.getElementsByClassName('tabs__content')[userPart - 1] == undefined) {
//     console.warn(`Curently there are only ${document.getElementsByClassName('tabs__content').length} parts in https://learn.javascript.ru/. 
//     Therefore the first argument takes only numbers from 1 to ${document.getElementsByClassName('tabs__content').length}`);
//     return
// }
// if (document.getElementsByClassName('tabs__content')[userPart - 1].querySelectorAll('.list__item')[userChapter - 1] == undefined) {
//     console.warn(`Curently there are only ${document.getElementsByClassName('tabs__content')[userPart - 1].querySelectorAll('.list__item').length} chapters in ${userPart} part of https://learn.javascript.ru/. 
//     Therefore the second argument takes only numbers from 1 to ${document.getElementsByClassName('tabs__content')[userPart - 1].querySelectorAll('.list__item').length}`);
//     return
// }
// if (userStyle !== 'number' && userStyle !== 'dash' && userStyle !== 'current') {
//     console.warn('Third argument takes one of the following values: number, dash, current');
//     return
// }



