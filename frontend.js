function welcome(){
    let user = document.getElementById ('username').value;
    let userpass = document.getElementById ('userpassword').value;

    if(!user){
    alert("input username");
}else if (!userpass){
    alert ("input your password")
}else{
    window.open("end.html");
    
}

}
alert("welcome" + user);





