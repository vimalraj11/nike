// Select all input elements for varification
const userName = document.getElementById("name");
const userId = document.getElementById("userid")
const password = document.getElementById("password");
const gender = document.registration;


// function for form varification
function formValidation() {
    // checking length of name
    if (userName.value.length < 2 || userName.value.length > 20) {
        alert("Name have more than 2 character");
        userName.focus();
        return false;
    }
    if (userId.value.length < 7) {
        alert("User ID have 7 character");
        userId.focus();
        return false;
    }
    if (password.value.length < 5) {
        alert("Password have more than 5 character");
        password.focus();
        return false;
    }
    // checking gender
    if (gender.gender.value === "") {
        alert("Please select your gender!");
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