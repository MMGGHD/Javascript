let number = Math.floor(Math.random() * 6);
console.log(number);

let answer = window.prompt("숫자 맞히기 게임. 0~5까지의 숫자를 입력하세요");
let message;
// if (answer == number) {
//   message = "정답!";
//   window.alert(message);
// } else if (answer < number) {
//   message = "땡! 더 큰 숫자입니다.";
//   window.alert(message);
// } else if (answer > number) {
//   message = "땡! 더 작은 숫자입니다";
//   window.alert(message);
// } else {
//   message = "0~5의 숫자를 입력하세요";
//   window.alert(message);
// }
let bool = true;
while (bool) {
  if (answer == number) {
    message = "정답!";
    bool = false;
    console.log("1번 :" + bool);
  } else if (answer < number) {
    message = "땡! 더 큰 숫자입니다.";
    window.alert(message);
    answer = window.prompt("숫자 맞히기 게임. 0~5까지의 숫자를 입력하세요");
    console.log("2번 :" + bool);
  } else if (answer > number) {
    message = "땡! 더 작은 숫자입니다";
    window.alert(message);
    answer = window.prompt("숫자 맞히기 게임. 0~5까지의 숫자를 입력하세요");
    console.log("3번 :" + bool);
  } else {
    message = "0~5의 숫자를 입력하세요";
    window.alert(message);
    answer = window.prompt("숫자 맞히기 게임. 0~5까지의 숫자를 입력하세요");
    console.log("4번 :" + bool);
  }
}
