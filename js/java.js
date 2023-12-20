
/*=== toggle icon navbar ===*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*=== boutton send ===*/
function sendMessage() {
    // Récupérer les valeurs des champs du formulaire
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var mobileNumber = document.getElementById('mobileNumber').value;
    var emailSubject = document.getElementById('emailSubject').value;
    var message = document.getElementById('message').value;

    // Vous pouvez faire quelque chose avec ces valeurs, par exemple les imprimer dans la console
    console.log("Full Name: " + fullName);
    console.log("Email: " + email);
    console.log("Mobile Number: " + mobileNumber);
    console.log("Email Subject: " + emailSubject);
    console.log("Message: " + message);

    // Ajoutez ici le code pour envoyer les données à votre backend ou effectuer d'autres actions
}


