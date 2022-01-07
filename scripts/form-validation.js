function register(){
    uname = document.getElementById('username').value;
    localStorage.setItem("myuname", uname)
    pass = document.getElementById('password').value;
    localStorage.setItem("mypass", pass)

    first=document.getElementById('firstname').value
    if(first.length==0){

        document.getElementById('error-msg-if-null').innerHTML="Name is requried....!"
    }
    if(first.length<=2 && first.length > 0 ){
        document.getElementById('error-msg-if-null').innerHTML="Name must more then 2 Char ....!"
    }
    if(first.length>2 ){
        document.getElementById('error-msg-if-null').innerHTML="Success....!"
        document.getElementById('error-msg-if-null').style.color = "green"
    }
    second=document.getElementById('surname').value
    if(second.length==0){
        document.getElementById('error-surname-msg-if-null').innerHTML=" Surname is requried....!"
    }
    if(first.length>1 ){
        document.getElementById('error-surname-msg-if-null').innerHTML="Success...!"
        document.getElementById('error-surname-msg-if-null').style.color = "green"
    }
}

function check(){
    uname = document.getElementById('username-login').value;
    pass = document.getElementById('password-login').value;
    if( uname == localStorage.getItem('myuname') && pass == localStorage.getItem('mypass'))
    {
        location.href='Shop-Site.html'
    }
    else{
        alert("login faild")
    }
}