// Итерационный подсчет факториала
function factIterat(num) {
  let result = 1;
  if (num < 0) {
    return "формула принимает только неотрицательное целое число";
  } else if (num === 0) {
    result = 1;
  } else {
    for (let i = 1; i <= num; i++) {
      result = result * i;
    }
  }
  return result;
}

// Рекурсивный расчет факториала
function factRec(num) {
  if (num < 0) {
    return "формула принимает только неотрицательное целое число";
  } else if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factRec(num - 1);
  }
}
