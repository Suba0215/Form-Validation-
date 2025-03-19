

const form=document.getElementById('form');
const user=document.getElementById('username');
const email=document.getElementById('email');
const pass=document.getElementById('password');
const cpass=document.getElementById('c_password');

form.addEventListener('submit',(e)=>{
   
    if(!validateinput()){
        e.preventDefault();  
    }
      
    })

function validateinput(){
    const userVal= user.value.trim();
    const emailVal= email.value.trim();
    const passVal= pass.value.trim();
    const cpassVal= cpass.value.trim();
    let success = true;

    if(userVal===''){
        success=false;
        seterror(user,'Username is required');
    }
    else{
        success=true;
        setsuccess(user);
    }



    if(emailVal===''){
        success=false;
        seterror(email,'Email is required');
    }
    else if(validateEmail(email)){
        success=false;
        seterror(email,'Enter the valid Email');
    }
    else{
        success=true;
        setsuccess(email);
    }



    if(passVal===''){
        success=false;
        seterror(pass,'Enter Password');
    }
    else{
        success=true;
        setsuccess(pass);
    }



    if(cpassVal===''){
        success=false;
        seterror(cpass,'Enter Password');
    }
    else if(cpassVal!==cpass){
        success=false;
        seterror(cpass,'Enter Password Correctly');
    }
    else{
        success=true;
        setsuccess(cpass);
    }

    return success;
   
}

function seterror(element,message){
    const inputgrp= element.parentElement;
    const errorElment=inputgrp.querySelector('.error');
    errorElment.innerText=message;
    inputgrp.classList.add('error');
    inputgrp.classList.remove('success');
}

function setsuccess(element){
    const inputgrp= element.parentElement;
    const errorElement=inputgrp.querySelector('.error');
    errorElement.innerText='';
    inputgrp.classList.add('success');
    inputgrp.classList.remove('error');
}

function validateEmail(){
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}


document.getElementById("form").addEventListener('submit',(e)=>{
    e.preventDefault();
    regsuccess();
})

function regsuccess(){
    alert('Registered Successfully!!!')
}


    
