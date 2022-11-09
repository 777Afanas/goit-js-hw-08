
// Напиши скрипт который будет сохранять текущее время воспроизведения видео 
// в локальное хранилище и, при перезагрузке страницы,
// продолжать воспроизводить видео с этого времени.

// Инициализируй плеер в файле скрипта как это описано в секции pre-existing player, 
// но учти что у тебя плеер добавлен как npm пакет, а не через CDN.  

// начни отслеживать событие timeupdate - обновление времени воспроизведения.


    import Player from '@vimeo/player';
    import throttle from 'lodash.throttle';                    
    

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
    const LOCALSTORAGE_KEY = 'videoplayer-current-time';

// Сохраняй время воспроизведения в локальное хранилище. 
// Пусть ключом для хранилища будет строка "videoplayer-current-time". 
player.on('timeupdate', throttle(function (data) {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data.seconds));
}), 1000);

// При перезагрузке страницы воспользуйся методом setCurrentTime() 
// для того чтобы возобновить воспроизведение с сохраненной позиции.
player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY))
    .catch(function (error) {
        console.error(error)
    }); 


