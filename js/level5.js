let input = document.querySelector('input');
let btn = document.querySelector('button');
let correct = 0, total = 0;
let accuracy = 0.0;

btn.onclick = function () {
    let answerString = input.value.toString().toLowerCase().trim();
    if (answerString.length == 0) {
        alert('Invalid input');
        return;
    }
    total++;
    if (answerString == "twelve" || answerString == "12") {
        window.location.href = "level6.html";
        correct++;
    } else {
        alert('wrong answer');
    }
    accuracy = (correct / total) * 100;
    console.log(accuracy);
}
document.querySelector('a').onclick = function () {
    window.location.href='oops.html';
}
