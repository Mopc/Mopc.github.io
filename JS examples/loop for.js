var days; // Дней в периоде
var evenDayAmount; // Количество протеина в чётные дни
var oddDayAmount; // Количество протеина в нечётные дни
var total = 0; // Общее количество протеина

for(var i = 1; i <= days; i++){
  if(i%2 === 0){
    total += evenDayAmount;
    console.log(total);
    } else if(i%2 !== 0){
      total += oddDayAmount;
      console.log(total);
      }
  }
  console.log(total);

/*

Мяу! Программа должна считать сколько протеина я должен выпить за весь тренировочный период.

В чётные дни я пью 200 грамм. В нечётные 100 грамм.

Количество дней хранится в переменной days, количество протеина для приёма в чётный день — в переменной evenDayAmount, протеин в нечётный день — в переменной oddDayAmount, а результат необходимо записать в переменную total, которая уже задана.

*/