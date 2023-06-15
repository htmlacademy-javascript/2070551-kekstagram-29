// Функция для проверки длины строки
const testString = (str, strLength) => str.length <= strLength;

testString('Привет!', 10);

// Функция для проверки, является ли строка палиндромом
function checkPalindrome(str) {
  const newStr = str.replaceAll(' ', '').toLowerCase();
  let check = '';

  for (let i = newStr.length - 1; i >= 0; i--) {
    check += newStr[i];
  }
  return newStr === check;
}

checkPalindrome('топот');

// Функция возврата числа

function takeNum(str) {
  let num = '';
  for (let i = 0; i < str.length; i++) {
    const symbol = parseInt(str[i], 10);
    if (Number.isNaN(symbol) === false) {
      num += symbol;
    }
  }
  return Number(num || str);
}

takeNum('я томат');
