// HTMLからidの取得
const confirmTime2 = document.getElementById("confirmTime2");
const startTimer2 = document.getElementById("startTimer2");
const now_time = document.getElementById("now_time");
// 空の変数定義
let timer;
let startTime;
let nowTime;
// 変数diffTimeを定義し、nullを代入
let diffTime = null;


confirmTime2.addEventListener("click", () => {
    // Dateオブジェクトの取得
    nowTime = new Date();
    // diffTimeがnullだった場合nowTimeからstartTimeを引き、diffTimeに代入
    if (diffTime === null) {
        diffTime = Math.floor((nowTime.getTime() - startTime.getTime()) / 1000);
        // console.log("スタートしてません");
    }
    if (diffTime < 20) {
        alert(`まだ${diffTime}秒、、、再スタートだ`)
    } else {
        alert(`もう${diffTime}秒だ！再挑戦せよ！`)
    }
});

startTimer2.addEventListener("click", () => {
    startTime = new Date();
    diffTime = null;
    timer = setInterval("countUp2()", 1000);
});
// countUp2関数定義
const countUp2 = () => {
    // checkTimeにDateオブジェクトを代入
    let checkTime = new Date();
    // startTimeからcheckTimeを引き、diffTimeに代入
    let diffTime = Math.floor((checkTime.getTime() - startTime.getTime()) / 1000);
    if (diffTime === 40) {
        alert("終了！再チャレンジ！")
    }
}
