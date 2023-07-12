// Функция, которая генерирует случайное целое число

const getRandomInt = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Функция, которая генерирует уникальное число в указанном диапазоне

function getUniqueId(min, max) {
  let num = min;

  return () => {
    if(num <= max) {
      return num++;
    }
  };
}

export {getRandomInt, getUniqueId};
