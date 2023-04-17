let input = document.querySelector('input');
let btn = document.querySelector('button');

let correct=0,total=0;
let accuracy=0.0;

btn.onclick = function(){
    var flag = false;
    let ansString = input.value.toString().toLowerCase();
    total++;
    if(ansString.length==0){
        alert('Invalid input');
    }
    else if(ansString=="Harry Potter".toLowerCase().trim()){
        flag = true;
        window.location.href="level2.html";
        correct++;
    }
    else{
        alert('wrong answer');
    }
    accuracy = (correct/total)*100;
    // console.log(accuracy);
    uploadData(accuracy,flag);
}

function uploadData(accuracy,flag){
    firebase.auth().onAuthStateChanged( async(user) => {
        if (user) {
            var uid = user.uid;
           await firebase.database().ref('data/' + uid + '/level1').set({
                accuracy: accuracy
            })

            if(ok){
                window.location.href=('level2.html');
            }
        } else {
            alert('data not uploaded');
        }
    });
}
