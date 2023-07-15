//1
let name = 'Valentin';
alert(`Привет, ${name}!`);

//2
let age = 22;
alert(`Мне ${age} лет!`);

//3
let str1 = 'САЛАМ, ', str2 = 'БИШКЕК!';
alert(str1 + str2);

//4
let a = 17, b = 10;
c = a - b;
let d = 7;
let result = c + d;
alert(c + d);

//5
let hr = new Date, min, sec;
sec = hr.getSeconds();
min = hr.getMinutes();
hr = hr.getHours();
alert(`${hr}:${min}:${sec}`);

//6
var num = 10;
num = num++;
num = num++;
alert(num);