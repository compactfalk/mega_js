//1
let arr = new Array;
arr[0] = 0;
let cnt = 0;
arr.forEach(function (item, index, arr){
    if (item != 99)
     {
        cnt++;
        arr[index + 1] = Number(prompt());
     } else alert(`количество чисел: ${cnt}`);
 })

//2
let arr = new Array;
arr[0] = 0;
let cnt = 0;
let sum = 0;
arr.forEach(function (item, index, arr){
    if (item != 999)
    {
        cnt++;
        sum += item;
        arr[index + 1] = Number(prompt());
    } else alert(`количество чисел: ${cnt}, сумма: ${sum}`);
})
