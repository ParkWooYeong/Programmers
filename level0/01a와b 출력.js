// 정수 a와 b가 주어집니다. 
// 각 수를 입력받아 입출력 예와 같은 형식으로 출력하는 코드를 작성해 보세요.

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(' ');

const a = Number(input[0]);
const b = Number(input[1]);

console.log(`a = ${a}`);
console.log(`b = ${b}`);
