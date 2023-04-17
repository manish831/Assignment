document.querySelector('a').onclick = function () {
    window.location.href = 'signup.html';
}
// const firebaseConfig = {
//     apiKey: "AIzaSyBadEoUc2PFIUpKxKLzrKm7JZDomHA5Wtk",
//     authDomain: "elitmus-assignment-b7443.firebaseapp.com",
//     databaseURL: "https://elitmus-assignment-b7443-default-rtdb.firebaseio.com",
//     projectId: "elitmus-assignment-b7443",
//     storageBucket: "elitmus-assignment-b7443.appspot.com",
//     messagingSenderId: "898922416657",
//     appId: "1:898922416657:web:a22826aeb3699342ffffb0"
// };
// firebase.initializeApp(firebaseConfig);

// Listen for form submit
document.querySelector('button').addEventListener('click', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    //to open admin page
    if(email=='admin@elitmus.com'){
        if(password=='admin5296517'){
            window.location.href = 'admin.html';
        }else{
            alert('wrong password');
        }
        return;
    }
    // create user
    loginUser(email, password);
}
// Save message to firebase
function loginUser(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            document.getElementById('contactForm').reset();
            window.location.href='level0.html';
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorCode, errorMessage);
        });
}