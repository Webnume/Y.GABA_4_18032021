function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

const modalCloser = document.querySelectorAll(".close");

const first = document.querySelector("#first");
const last = document.querySelector("#last");
const email = document.querySelector("#email"); 
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const townLocation = document.querySelectorAll('input[name="location"]');
const conditions = document.querySelector("#checkbox1");
const btnSubmit = document.querySelector(".btn-submit");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal event
modalCloser.forEach((btn) => btn.addEventListener("click", closeModal));
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}


function validateTextInput(text) {
  const re = /^[a-zA-Z àâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]*$/;
  return re.test(text);
}  

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}  

function validateRadio(radios)
{
    for (let i = 0; i < radios.length; i++){
      if (radios[i].checked) return true;             
    }
      return false;
}

//Set date input field's max date to today
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
today = yyyy+'-'+mm+'-'+dd;
document.getElementById("birthdate").setAttribute("max", today);



const form = document.querySelector("body > main > div.bground > div > div > form");

function firstCheck(){
  if(first.value.length < 2 || !validateTextInput(first.value) ){
      formData[0].dataset.errorVisible = "true";
      return false;
    }
      formData[0].dataset.errorVisible = "";
      return true;
}

function lastCheck(){
  if(last.value.length < 2 || !validateTextInput(last.value) ){        
    formData[1].dataset.errorVisible = "true";
    return false;
  }else{
    formData[1].dataset.errorVisible = "";
    return true;
  }
}

function emailCheck(){
  if (!(validateEmail(email.value))){    
    formData[2].dataset.errorVisible = "true";
    return false;
  }
  else{
    formData[2].dataset.errorVisible = "";
    return true;
  }
}

function birthdateCheck(){
  if ((birthdate.value)===""){ 
    formData[3].dataset.errorVisible = "true";
    return false;
  }
  else{
    formData[3].dataset.errorVisible = "";
    return true;
  }
}

function quantityCheck(){
  if ((quantity.value)===""){   
    formData[4].dataset.errorVisible = "true";
    return false;
  }
  else{
    formData[4].dataset.errorVisible = "";
    return true;
  }
}

function townCheck(){
  if (!(validateRadio (townLocation))){   
    formData[5].dataset.errorVisible = "true";
    return false;
  }
  else{
    formData[5].dataset.errorVisible = "";
    return true;
  }
}

function conditionsCheck(){
  if (!(conditions.checked)){   
    formData[6].dataset.errorVisible = "true";
    return false;
  }
  else{
    formData[6].dataset.errorVisible = "";
    return true;
  }
}

function allFieldsChecking(){
  firstCheck();
  lastCheck();
  emailCheck();
  birthdateCheck();
  quantityCheck();
  townCheck();
  conditionsCheck();
}

function allFieldsChecked(){
  if(
    firstCheck()===true &&
    lastCheck()===true &&
    emailCheck()===true &&
    birthdateCheck()===true &&
    quantityCheck()===true &&
    townCheck()===true &&
    conditionsCheck()===true 
  ){
    return true;
  }else{
    return false;
  }
}

function successValidForm(){

  for (let i=0; i < formData.length; i++){
    
  formData[i].style.opacity="0";        
  }
  first.disabled=true;
  last.disabled=true;
  email.disabled=true;
  birthdate.disabled=true;
  quantity.disabled=true;
  townLocation.disabled=true;
  document.querySelector("form > p").style.opacity="0";
  formData[3].style.opacity="1";
  formData[3].innerHTML="Merci ! Votre réservation a été reçue.";

  btnSubmit.value="Fermer";
  document.querySelector("body > main > div.bground > div > div > form").setAttribute("onsubmit", "");

  if(btnSubmit.value==="Fermer"){        
    btnSubmit.addEventListener("click", () => {
      closeModal();
    }, false);    
  } 
}

function validationForm(){
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (allFieldsChecked()===true){
      successValidForm();
    }else{
      allFieldsChecking();
    }
  });
}  

 
validationForm();
