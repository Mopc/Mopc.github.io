var qualificationDistance = 200; // Длина прыжка для прохода квалификации
var attempts = [120, 150, 160, 201, 203, 180, 202]; // Попытки с длинами прыжков
var qualified = false;
var averageBest = 0;

for (var i = 0; i <= 3; i++) {
  var maxValue = attempts[i];

  for (var j = i + 1; j <= attempts.length - 1; j++) {
    if (attempts[j] > maxValue) {
      maxValue = attempts[j];
      var swap = attempts[i];
      attempts[i] = maxValue;
      attempts[j] = swap;
    }
  }
}
console.log(attempts);
var averageBest = (attempts[0] + attempts[1] + attempts[2]) / 3;
console.log(averageBest);

if(averageBest > qualificationDistance) {
  qualified = true;
  } else {
    qualified = false;
    }



/*

Мяу! Я провожу тренировки и хочу понять, пройду ли квалификацию.

В течение тренировки я делаю несколько прыжков, и собираю длины прыжков в массив attempts.

Программа должна выбрать три лучших прыжка, а затем посчитать среднее значение этих трёх прыжков и записать его в переменную averageBest.

Квалификационное значение хранится в переменной qualificationDistance.

Если среднее от лучших трёх прыжков больше квалификационного значения, то я прошёл квалификацию и переменная qualified должна содержать true. Если квалификация не пройдена, то в qualified должно быть false.

*/