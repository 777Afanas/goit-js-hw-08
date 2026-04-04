// 1. Розмітка галереї
// Додаємо тег контейнера галереї — невпорядкований список
// із класом gallery (файл index.html).
//  <body>
//  <ul class="gallery js-gallery"></ul>
//  </body>;

// 2. Масив зображень - об’єктів, кожен об’єкт - один елемент галереї.

const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

// 3. Розмітка елементів галереї
// З використанням HTML шаблона елемента галереї створюємо (createImageItemTemplate)
// та додаємо розмітку усіх елементів масиву об'єктів images
// (imagesTemplate) у середину ul.gallery.

const refs = {
  imagesList: document.querySelector('.js-gallery'),
};

const createImageItemTemplate = ({ preview, original, description }) => {
  return `
  <li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img
      class="gallery-image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
};

const imagesTemplate = images
  .map(imageItem => createImageItemTemplate(imageItem))
  .join('');

refs.imagesList.innerHTML = imagesTemplate;

const onImageItemClick = e => {
  // A. Ігноруємо клік по самому контейнеру
  // (пусте місце між картинками)
  if (e.target === e.currentTarget) return;

  // СКАСУВАННЯ: якщо ми всередині контейнера
  // і це було посилання,
  // ми зупиняємо перехід ВЖЕ ЗАРАЗ, щоб сторінка
  // не перезавантажилась.
  e.preventDefault();

  // Додаткова перевірка: чи клікнули саме по картинці
  if (!e.target.classList.contains('gallery-image')) return;

  const { source } = e.target.dataset;
  const { alt } = e.target;

  const modalInstance = basicLightbox.create(`
    <div class="modal">
    <img
      class="gallery-image"
      src="${source}"       
      alt="${alt}"
    />
    </div>    
    `);

  modalInstance.show();
};

refs.imagesList.addEventListener('click', onImageItemClick);
