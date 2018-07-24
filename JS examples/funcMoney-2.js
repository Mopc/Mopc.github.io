var initialAmount = 50000;
var depositDuration = 12;
var simplePercent = 7;
var complexPercent = 6;

var calculateDeposit = function (initialAmount, percent, depositDuration, isCapitalize) {
var percent = (percent / 12) / 100;
if (isCapitalize) {
for (var i = 1; i <= depositDuration; i++) {
initialAmount += initialAmount * percent;
}
return Math.round(initialAmount);
}
return Math.round(initialAmount + (percent * depositDuration * initialAmount));
};

var simpleSum = calculateDeposit(initialAmount, simplePercent, depositDuration, false);
var complexSum = calculateDeposit(initialAmount, complexPercent, depositDuration, true);

var recommendedType;
var finalAmount;

if(simpleSum > complexSum) {
  recommendedType = 'simple';
  finalAmount = simpleSum
  } else {
  recommendedType = 'complex';
  finalAmount = complexSum
    }




/*

Мяу! Мне нужна программа для сравнения вкладов. Я указываю параметры вкладов в переменных:

1. initialAmount — исходный размер депозита,
2. depositDuration — срок депозита в месяцах,
3. simplePercent — процентная ставка для депозита с простыми процентами,
4. complexPercent — процентная ставка для депозита с капитализацией процентов.

Программа должна рассчитывать итоговый размер вклада для депозитов с простыми и капитализируемыми процентами, а затем сохранять рекомендации в две переменных:

1. recommendedType — рекомендуемый тип депозита. Записывай в эту переменную строку simple, если рекомендуешь простой депозит, и строку complex, если депозит с капитализацией процентов выгоднее.
2. finalAmount — итоговый размер депозита.

*/