let input = document.querySelector('input');
let btn = document.querySelector('button');

let correct=0,total=0;
let accuracy=0.0;

btn.onclick = function(){
    let inpString = input.value.toString().toLowerCase();
    if(inpString.length==0){
        alert('Invalid input');
        return;
    }
    total++;
    let x ="Five".toLowerCase().trim()
    if(inpString == x || inpString == "5" ){
        window.location.href="level5.html";
        correct++;
    }else{
        alert('wrong answer');
    }
    accuracy = (correct/total)*100;
    console.log(accuracy);
}
