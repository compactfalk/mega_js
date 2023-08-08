/*
1) Напишите функцию, которая разворачивает массив в обратном порядке и затем ее возвращает.
   Функция наша принимает массив любых элементов. 
   Например: 
   const data = [1, 2, 3]; 
   myFunc(data); // [3, 2, 1]
*/

const reverse_array = (A) => {
    for(let i = 0; i < A.lenght; i++)
        B[i] = A.pop();
    document.write(B);
    return B;
}

let B = new Array(n);
reverse_array(A, B, n);

/*
2) Пользователь вводит число от 1 до 31, которое присваивается переменной day. 
   Определите в какую декаду месяца попадает это число: в первую, вторую или третью. 
   Результат нужно вывести на экран.
*/

const thirds = (k) => {
    if (k < 11) {
        document.write(1);
        return 1;
    }
    if (k < 21) {
        document.write(2);
        return 2;
    }
    if (k < 32) {
        document.write(3);
        return 3;
    }
}

let k = Number(prompt());
thirds(k);
