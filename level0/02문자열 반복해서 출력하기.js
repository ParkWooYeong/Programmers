//문자열 str과 정수 n이 주어집니다.
//str이 n번 반복된 문자열을 만들어 출력하는 코드를 작성해 보세요.

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(' ');



const str = input[0]; // 반복 할 문자열
const n = nuber(input[1]); // 반복 횟수

consol.log(str,repeat(n)); //문자열,repseat(횟수)