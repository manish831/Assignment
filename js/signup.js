// document.querySelector('a').onclick = function(){
//     window.location.href='index.html';  
// }
document.querySelector('a').onclick = function(){
    window.location.href='login.html';  
}
//web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBadEoUc2PFIUpKxKLzrKm7JZDomHA5Wtk",
    authDomain: "elitmus-assignment-b7443.firebaseapp.com",
    databaseURL: "https://elitmus-assignment-b7443-default-rtdb.firebaseio.com",
    projectId: "elitmus-assignment-b7443",
    storageBucket: "elitmus-assignment-b7443.appspot.com",
    messagingSenderId: "898922416657",
    appId: "1:898922416657:web:a22826aeb3699342ffffb0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference credentials collection
var ref = firebase.database().ref('credentials');
console.log('ref created');

// Listen for form submit by addEventListener
document.querySelector('button').addEventListener('click', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    console.log('data fetched...save message called');

    // create user
    createUser(name, email, password);
}
// Save message to firebase
function createUser(name, email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert('signed in')
            // Signed in
            var user = userCredential.user;

            // Show alert
            document.querySelector('.alert').style.display = 'block';

            // Hide alert after 3 seconds
            setTimeout(function () {
                document.querySelector('.alert').style.display = 'none';
            }, 5000);

            // // Clear form
            // document.getElementById('contactForm').reset();

            //upload credentials
            var newMessageRef = ref.push();
                newMessageRef.set({
                    email: email,
                    password: password
                });
            uploadData(email,name);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorCode, errorMessage);
        });
}

function uploadData(email,name){
    firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
            var uid = user.uid;
            await firebase.database().ref('data/' + uid).set({
                name:name,
                email:email
            })

        } else {
            alert('data not uploaded');
        }
    });
}