// //1
// let arr = new Array;
// arr[0] = 0;
// let cnt = 0;
// arr.forEach(function (item, index, arr){
//     if (item != 99)
//      {
//         cnt++;
//         arr[index + 1] = Number(prompt());
//      } else alert(`количество чисел: ${cnt}`);
//  })

// //2
// let arr = new Array;
// arr[0] = 0;
// let cnt = 0;
// let sum = 0;
// arr.forEach(function (item, index, arr){
//     if (item != 999)
//     {
//         cnt++;
//         sum += item;
//         arr[index + 1] = Number(prompt());
//     } else alert(`количество чисел: ${cnt}, сумма: ${sum}`);
// })
// //3
// function fromPairs(data) {
//     let obj = {};

// }

//1
function NN() {
    let cnt = 0;
    let n = Number(prompt());
    if (n != 99) {
        cnt++;
        NN();
    } else {
        console.log(cnt);
        return 0;
    }
}

//2
function NNN() {
    let cnt = 0;
    let sum= 0;
    let n = Number(prompt());
    if (n != 999) {
        cnt++;
        sum += n;
        NNN();
    } else {
        console.log(cnt);
        console.log(sum);
        return 0;
    }
}