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

// Функция с 4 аргументами: начало рабочего дня, конец рабочего дня, начало встречи, продолжительность встречи в минутах.
// Функция возвращает true, если встреча не выходит за рамки рабочего дня, и false, если выходит.
// Время указывается в виде строки в формате часы:минуты.
// Для указания часов и минут могут использоваться как две цифры, так и одна

// Получение часов и минут из значения минут.
function minutesToHours(minutes) {
  if (!minutes) {
    return null;
  }

  const hoursMinutes = {h: 0, m: minutes};

  if (minutes >= 60) {
    const hours = minutes / 60;

    hoursMinutes.h = parseInt(hours, 10);
    hoursMinutes.m = hours % 1 * 60;
  }

  return hoursMinutes;
}

minutesToHours(90);

// Получение минут из строки с часами и минутами (формат - 08:00)
function getMinutesFromTime(timeString) {
  const normilizedTimeString = timeString.replace(/[^:|\d]/gi, '');
  const [hours, minutes] = normilizedTimeString.split(':');

  return parseInt(hours, 10) * 60 + parseInt(minutes, 10);
}

// Функция для проверки длительности встречи в рамках рабочего дня (один и тот же день)
function checkMeetTimeInBounds(workDayStartTime, workDayEndTime, meetingStartTime, meetingDuration) {
  // Преобразуем строковое время в минуты, для удобства манипуляций и короткой записи - в те же переменные
  meetingDuration = getMinutesFromTime(meetingStartTime) + meetingDuration;
  workDayStartTime = getMinutesFromTime(workDayStartTime);
  workDayEndTime = getMinutesFromTime(workDayEndTime);

  return meetingDuration >= workDayStartTime && meetingDuration <= workDayEndTime;
}

checkMeetTimeInBounds('08:00', '17:30', '14:00', 90);
