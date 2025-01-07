// 1-masala

// function RaqamlarYigindisi(K) {
//     if (K === 0) return 0;
//     return (K % 10) + RaqamlarYigindisi(Math.floor(K / 10));
// }

// let sonlar = [123, 456, 789];
// sonlar.forEach(son => {
//     console.log(`${son} raqamlar yig'indisi:`, RaqamlarYigindisi(son));
// });

// 2-masala

// /function Fibonachchi(N) {
//     if (N === 1 || N === 2) return 1;
//     return Fibonachchi(N - 1) + Fibonachchi(N - 2);
// }

// let N = 10;
// console.log(`${N}-Fibonachchi soni:`, Fibonachchi(N));

// 3-masala
function Faktorial(N) {
    if (N === 0 || N === 1) return 1;
    return N * Faktorial(N - 1);
}

let faktorialSonlar = [5, 7, 10];
faktorialSonlar.forEach(son => {
    console.log(`${son} faktoriali:`, Faktorial(son));
});