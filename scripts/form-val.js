// Select all input elements for varification
const userName = document.getElementById("name");
const userId = document.getElementById("userid")
const password = document.getElementById("password");
const gender = document.registration;


// function for form varification
function formValidation() {
    // checking length of name
    if (userName.value.length < 2 || userName.value.length > 20) {
        document.getElementById("name-error").innerHTML = "Name is required";
        document.getElementById("name-error").style.color = "red";
        userName.focus();
        return false;
    }
    if (userName.value.length > 2){
        document.getElementById("name-error").innerHTML = "Success";
        document.getElementById("name-error").style.color = "green";
    }

    if (userId.value.length < 7) {
        document.getElementById("username-error").innerHTML = "User ID have 7 character";
        document.getElementById("username-error").style.color = "red";
        userId.focus();
        return false;
    }
    if (password.value.length < 5) {
        document.getElementById("password-error").innerHTML = "Password have more than 5 character";
        document.getElementById("password-error").style.color = "red";
        password.focus();
        return false;
    }
    // checking gender
    if (gender.gender.value === "") {
        document.getElementById("gender-error").innerHTML = "Please select your gender!";
        document.getElementById("gender-error").style.color = "red";
        return false;
    }
    uid = document.getElementById('userid').value;
    localStorage.setItem("myuserid", uid)
    pass = document.getElementById('password').value;
    localStorage.setItem("mypass", pass)
}

function check() {
    uid = document.getElementById('userid-login').value;
    pass = document.getElementById('password-login').value;
    if (uid == localStorage.getItem('myuserid') && pass == localStorage.getItem('mypass')) {
        location.href = 'Shop-Site.html'
    } else {
        alert("login faild")
    }
}