document.getElementById("play-btn").onclick = function () {
    location.href = "level1.html";
};

setInterval((checkCurrentLoggedInUser = () => {
    const user = firebase.auth().currentUser;
    console.log(user);
}), 8000);