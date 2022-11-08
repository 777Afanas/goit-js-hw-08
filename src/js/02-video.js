
// Напиши скрипт который будет сохранять текущее время воспроизведения видео 
// в локальное хранилище и, при перезагрузке страницы,
// продолжать воспроизводить видео с этого времени.

// Инициализируй плеер в файле скрипта как это описано в секции pre-existing player, 
// но учти что у тебя плеер добавлен как npm пакет, а не через CDN.
    import Player from '@vimeo/player';
    import throttle from 'lodash.throttle';                    
    
    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);


player.on('timeupdate', throttle (() => {
    localStorage.setItem('videoplayer-current-time', seconds);
  }, 1000)
    );

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'))
    .catch(function (error) {
        console.error(error)
    });    


// player.on('timeupdate', throttle (() => {
//     localStorage.setItem('videoplayer-current-time', seconds);
//   }, 1000)
//     );

// player.setCurrentTime(localStorage.getItem('videoplayer-current-time'))
//     .catch(function (error) {
//         console.error(error)
//     }); 





// Разбери документацию метода on() и 
// начни отслеживать событие timeupdate - обновление времени воспроизведения.

// const onPlay = function(data) {
//     // data is an object containing properties specific to that event
// };

// player.on('play', onPlay);

// Сохраняй время воспроизведения в локальное хранилище. 
// Пусть ключом для хранилища будет строка "videoplayer-current-time".

//  localStorage. setItem('videoplayer-current-time', 'Значение');

// При перезагрузке страницы воспользуйся методом setCurrentTime() 
// для того чтобы возобновить воспроизведение с сохраненной позиции.

// player.setCurrentTime(30.456).then(function(seconds) {
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });


// Добавь в проект бибилотеку lodash.throttle и сделай так,
// чтобы время воспроизведения обновлялось в хранилище не чаще чем раз в секунду.
// document.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     console.log("Scroll handler call every 300ms");
//   }, 300)
// );