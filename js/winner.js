let btn = document.getElementById('claimBtn');
btn.onclick = function(){
    document.querySelectorAll('img')[1].src = '/assets/congratulations.gif';
    setTimeout(function(){
        firebase.auth().signOut().then(() => {
            alert('You have been signed out. Thank you for playing this game');
          }).catch((error) => {
    
          });
    },5000);
}
