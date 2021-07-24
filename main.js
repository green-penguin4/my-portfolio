const button1 = document.getElementById("top-visual-button1");
const button2 = document.getElementById("top-visual-button2");
const button3 = document.getElementById("top-visual-button3");
const Scroll = document.getElementById("scroll");
const Quiz = document.getElementById("top-visual-quiz");
const QuizText = document.getElementById("quiz-text");
const QuizArea = document.getElementById("quiz-area");

var quizlist = new Array(
  "./image/quiz1.jpg",
  "./image/quiz2.jpg",
  "./image/quiz3.jpg",
  "./image/quiz4.jpg",
  "./image/quiz5.jpg"
);
var selectnum = Math.floor(Math.random() * quizlist.length);
Quiz.setAttribute(
  "style",
  "background-image:url(" + quizlist[selectnum] + ");"
);
Quiz.setAttribute("id", selectnum);

const Quiz1 = document.getElementById("0");
const Quiz2 = document.getElementById("1");
const Quiz3 = document.getElementById("2");
const Quiz4 = document.getElementById("3");
const Quiz5 = document.getElementById("4");

if (Quiz1) {
  QuizText.setAttribute("class", "fadeIn");
  QuizText.textContent = "私が一番好きな動物は？";
  button1.textContent = "ペンギン";
  button2.textContent = "ねこ";
  button3.textContent = "なまけもの";
  button1.onclick = function () {
    QuizArea.setAttribute("class", "fadeIn");
    QuizText.textContent = "正解！何時間でも眺めていられます・・・";
    Scroll.textContent = "▽もっと知る▽";
    button1.setAttribute("disabled", true);
    button2.setAttribute("class", "nonpushed");
    button3.setAttribute("class", "nonpushed");
    button2.setAttribute("disabled", true);
    button3.setAttribute("disabled", true);
  };
  button2.onclick = function () {
    QuizArea.setAttribute("class", "fadeIn");
    QuizText.textContent = "おしい！犬派か猫派か聞かれたら、断然ぬこ様ですね！";
    Scroll.textContent = "▽正解を確かめる▽";
    button1.setAttribute("class", "nonpushed");
    button3.setAttribute("class", "nonpushed");
    button1.setAttribute("disabled", true);
    button2.setAttribute("disabled", true);
    button3.setAttribute("disabled", true);
  };
  button3.onclick = function () {
    QuizArea.setAttribute("class", "fadeIn");
    QuizText.textContent = "残念！なまけ体質ではありますが・・・";
    Scroll.textContent = "▽正解を確かめる▽";
    button1.setAttribute("class", "nonpushed");
    button2.setAttribute("class", "nonpushed");
    button1.setAttribute("disabled", true);
    button2.setAttribute("disabled", true);
    button3.setAttribute("disabled", true);
  };
}

if (Quiz2) {
  QuizText.setAttribute("class", "fadeIn");
  QuizText.textContent = "私がはまっている飲み物は？";
  button1.textContent = "紅茶";
  button2.textContent = "珈琲";
  button3.textContent = "チャイ";
  button1.onclick = function () {
    QuizArea.setAttribute("class", "fadeIn");
    QuizText.textContent = "おしい！フルーツと一緒に飲むことが多いよ！";
    Scroll.textContent = "▽正解を確かめる▽";
    button2.setAttribute("class", "nonpushed");
    button3.setAttribute("class", "nonpushed");
    button1.setAttribute("disabled", true);
    button2.setAttribute("disabled", true);
    button3.setAttribute("disabled", true);
  };
  button2.onclick = function () {
    QuizArea.setAttribute("class", "fadeIn");
    QuizText.textContent =
      "正解！自分で淹れたり、カフェ巡りをしたり、コヒライフを満喫中。";
    Scroll.textContent = "▽もっと知る▽";
    button1.setAttribute("class", "nonpushed");
    button3.setAttribute("class", "nonpushed");
    button1.setAttribute("disabled", true);
    button2.setAttribute("disabled", true);
    button3.setAttribute("disabled", true);
  };
  button3.onclick = function () {
    QuizArea.setAttribute("class", "fadeIn");
    QuizText.textContent = "残念！でも美味しいですよね。";
    Scroll.textContent = "▽正解を確かめる▽";
    button1.setAttribute("class", "nonpushed");
    button2.setAttribute("class", "nonpushed");
    button1.setAttribute("disabled", true);
    button2.setAttribute("disabled", true);
    button3.setAttribute("disabled", true);
  };
}

if (Quiz3) {
  QuizText.setAttribute("class", "fadeIn");
  QuizText.textContent = "私が卒論を描く予定の学問分野は？";
  button1.textContent = "西洋美術";
  button2.textContent = "東洋美術";
  button3.textContent = "日本美術";
  button1.onclick = function () {
    QuizArea.setAttribute("class", "fadeIn");
    QuizText.textContent = "残念！もちろん好きな画家もいます。";
    Scroll.textContent = "▽正解を確かめる▽";
    button1.setAttribute("disabled", true);
    button2.setAttribute("class", "nonpushed");
    button3.setAttribute("class", "nonpushed");
    button2.setAttribute("disabled", true);
    button3.setAttribute("disabled", true);
  };
  button2.onclick = function () {
    QuizArea.setAttribute("class", "fadeIn");
    QuizText.textContent = "おしい！仏像の足首フェチではあります（）";
    Scroll.textContent = "▽正解を確かめる▽";
    button1.setAttribute("class", "nonpushed");
    button2.setAttribute("disabled", true);
    button3.setAttribute("class", "nonpushed");
    button1.setAttribute("disabled", true);
    button3.setAttribute("disabled", true);
  };
  button3.onclick = function () {
    QuizArea.setAttribute("class", "fadeIn");
    QuizText.textContent = "正解！特に近世江戸の芸術に関心があります。";
    Scroll.textContent = "▽もっと知る▽";
    button1.setAttribute("class", "nonpushed");
    button2.setAttribute("class", "nonpushed");
    button3.setAttribute("disabled", true);
    button1.setAttribute("disabled", true);
    button2.setAttribute("disabled", true);
  };
}

if (Quiz4) {
  QuizText.setAttribute("class", "fadeIn");
  QuizText.textContent = "私がコレクションしているものは？";
  button1.textContent = "メダル";
  button2.textContent = "ゲームカード";
  button3.textContent = "ガチャガチャ";
  button1.onclick = function () {
    QuizArea.setAttribute("class", "fadeIn");
    QuizText.textContent = "正解！出先に自販機があれば即購入します。";
    Scroll.textContent = "▽もっと知る▽";
    button2.setAttribute("class", "nonpushed");
    button3.setAttribute("class", "nonpushed");
    button1.setAttribute("disabled", true);
    button2.setAttribute("disabled", true);
    button3.setAttribute("disabled", true);
  };
  button2.onclick = function () {
    QuizArea.setAttribute("class", "fadeIn");
    QuizText.textContent = "おしい！昔はポケカやラブべりを集めてました。";
    Scroll.textContent = "▽正解を確かめる▽";
    button1.setAttribute("class", "nonpushed");
    button3.setAttribute("class", "nonpushed");
    button1.setAttribute("disabled", true);
    button2.setAttribute("disabled", true);
    button3.setAttribute("disabled", true);
  };
  button3.onclick = function () {
    QuizArea.setAttribute("class", "fadeIn");
    QuizText.textContent = "残念！時々回します。頻繁じゃないかな。";
    Scroll.textContent = "▽正解を確かめる▽";
    button1.setAttribute("class", "nonpushed");
    button2.setAttribute("class", "nonpushed");
    button1.setAttribute("disabled", true);
    button2.setAttribute("disabled", true);
    button3.setAttribute("disabled", true);
  };
}

if (Quiz5) {
  QuizText.setAttribute("class", "fadeIn");
  QuizText.textContent = "私がよく出没する東京の街は？";
  button1.textContent = "表参道";
  button2.textContent = "吉祥寺";
  button3.textContent = "神保町";
  button1.onclick = function () {
    QuizArea.setAttribute("class", "fadeIn");
    QuizText.textContent =
      "おしい！美術館や珈琲店、表参道にもお気に入りはあります！";
    Scroll.textContent = "▽正解を確かめる▽";
    button2.setAttribute("class", "nonpushed");
    button3.setAttribute("class", "nonpushed");
    button1.setAttribute("disabled", true);
    button2.setAttribute("disabled", true);
    button3.setAttribute("disabled", true);
  };
  button2.onclick = function () {
    QuizArea.setAttribute("class", "fadeIn");
    QuizText.textContent = "残念！大好きな街、でも家から遠い！！";
    Scroll.textContent = "▽正解を確かめる▽";
    button1.setAttribute("class", "nonpushed");
    button3.setAttribute("class", "nonpushed");
    button1.setAttribute("disabled", true);
    button2.setAttribute("disabled", true);
    button3.setAttribute("disabled", true);
  };
  button3.onclick = function () {
    QuizArea.setAttribute("class", "fadeIn");
    QuizText.textContent =
      "正解！古本を探すもよし、三省堂で雑貨を見るもよし、喫茶店でくつろぐも良し。";
    Scroll.textContent = "▽もっと知る▽";
    button1.setAttribute("class", "nonpushed");
    button2.setAttribute("class", "nonpushed");
    button1.setAttribute("disabled", true);
    button2.setAttribute("disabled", true);
    button3.setAttribute("disabled", true);
  };
}
