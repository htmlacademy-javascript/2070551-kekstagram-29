import {getRandomInt, getUniqueId} from './generate.js';
import {DESCRIPTION, MESSAGE, NAME} from './data.js';

// Функция, которая выбирает случайный элемент массива

const getRandomArrayElement = (arr) => arr[getRandomInt(0, arr.length - 1)];

const getPhotoId = getUniqueId(1, 25);
const getCommentId = getUniqueId(1, Infinity);

// Функция для описания объекта с комментарием

// Количество комментариев к каждой фотографии — случайное число от 0 до 30. Все комментарии генерируются случайным образом.
// У каждого комментария есть идентификатор — id — любое число. Идентификаторы не должны повторяться.
// Поле avatar — это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg. Аватарки подготовлены в директории img.
// Для формирования текста комментария — message — необходимо взять одно или два случайных предложения
// Имена авторов также должны быть случайными. Набор имён для комментаторов составьте сами. Подставляйте случайное имя в поле name


function createComment () {
  return {
    id: getCommentId,
    avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
    message: getRandomArrayElement(MESSAGE, getRandomInt(1, 2)),
    name: getRandomArrayElement (NAME)
  };
}

// Функция для описания фотографии

// id, число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.
// url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.
// description, строка — описание фотографии. Описание придумайте самостоятельно.
// likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.
// comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии.

function photoDescribe () {
  return {
    id: getPhotoId,
    url: `/photos/${getPhotoId}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomInt (15, 200),
    comments: Array.from({length: getRandomInt(0, 30)}, createComment)
  };
}

photoDescribe();

export {createComment, photoDescribe};
