const signupForm = document.getElementById("signUpForm");
const loginForm = document.getElementById("logInForm");
const signupLogin = document.getElementById("signupLogin");

signupLogin.addEventListener("click", function () {
    if (signupForm.style.display === "none") {
        signupForm.style.display = "block";
        loginForm.style.display = "none";
    }
    else {
        signupForm.style.display = "none";
        loginForm.style.display = "block";
    }
});

let loginEmail1 = 'dimitarnalevski@gmail.com';
let loginPassword1 = '123456';
function login() {
    let loginEmail = document.getElementById('logInEmail').value;
    let loginPassword = document.getElementById('logInPassword').value;
    if (loginEmail === loginEmail1 && loginPassword === loginPassword1) {
        console.log('Login Successful');
        document.getElementById('loginMessage').innerHTML = ('Login Successful');
    }
    else {
        console.log('Incorrect E-mail or Password');
        document.getElementById('loginMessage').innerHTML = ('Incorrect E-mail or Password');
    }
};

function signup() {
    let fullName = document.getElementById('fullName').value;
    let signupEmail = document.getElementById('signInEmail').value;
    let signupPassword = document.getElementById('signInPassword').value;
    if (fullName && signupEmail && signupPassword) {
        console.log('You entered: ' + fullName + ' ' + signupEmail + ' ' + signupPassword);
        document.getElementById('signupMessage').innerHTML = ('SignUp completed')
    }
    else {
        document.getElementById('signupMessage').innerHTML = ('Fill in all Inputs')
    }
};