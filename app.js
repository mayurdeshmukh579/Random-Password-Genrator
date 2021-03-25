
document.getElementById('btn').addEventListener('click',()=>{
let chars= 'abcdefghijklmnopqrstwxyz0123456789ABCDEFGHIJKLMNOPQRSTWXYZ!@#$%^&*[]+-';
let passwordLength=16;
let password="";
for(let i=0;i<passwordLength;i++){
    let randomNumber=Math.floor(Math.random()*chars.length);
    password+=chars.substring(randomNumber,randomNumber+1)
}
document.getElementById("password").value=password;
});