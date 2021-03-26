/**
*@file - This adds design and validation to the form fields
*@author Mike Mike
*/

/**
*@const - selecting multiple elements in a page
*@type {Element}
*/
const form =document.querySelector('form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const activities = document.querySelector('#activities');
const select = document.querySelector('#payment');
const checkboxes = document.querySelectorAll('#activities input');
const creditCard = document.querySelector('#cc-num');
const zipCode = document.querySelector('#zip');
const cvv = document.querySelector('#cvv');


/**
*@function focusName
*@description- focus on the Name input
*/
const focusName = () => {
  document.querySelector('#name').focus();
}
focusName();
//callback focusName


/**
*@function otherJob
*@description - when you select other under the job role label will display
*               a text input
*/
function otherJob () {
  const otherRole= document.querySelector('#other-job-role');
  const title= document.querySelector('#title');
  otherRole.hidden= true;

  title.addEventListener('change' ,(e) =>{
    if(e.target.value === "other"){
      otherRole.hidden= false ;
  } else{
      otherRole.hidden= true;
  }
  })
}
otherJob();
// call back otherJobe

/**
*@function colorScheme
*@description - When a certain design theme is selected it the color dropdown
*                below will display congruous color scheme
*/
function colorScheme(){
  const color = document.querySelector('#color');

  const design = document.querySelector('#design');


  color.disabled = true;


  design.addEventListener('change', e =>{
    color.disabled = false;
    for(let i=0; i < color.children.length ; i++){
      const designTypes = e.target.value;
      const colorOptions = document.querySelectorAll('#color option')[i];

      if(colorOptions.getAttribute('data-theme') === designTypes){
        colorOptions.hidden = false;
        colorOptions.selected =true;
      } else {
        colorOptions.hidden = true;
        colorOptions.selected =false;
      }
    }
  })
}
colorScheme();
//calling colorScheme

/**
*@function totalAmount
*@description - When a priced checkbox is checked the price will be added to
*               to the total <p>
*/
function totalAmount() {
  const activities = document.querySelector('#activities');
  const total =document.querySelector('#activities-cost');
  const checkboxes = document.querySelectorAll('#activities input')
  let totalCost = 0;

  activities.addEventListener('change', e =>{
      const dataCost = +e.target.getAttribute('data-cost');
      if(e.target.checked){
        totalCost += dataCost;
      }else {
        totalCost-= dataCost;
      }
      total.innerHTML = `<p>Total: $${totalCost}</p>`
  })
}
totalAmount();
//calling totalAmount

/**
*@function paymentInfo
*@description - In the payment info drop down when you select a certain pay option
*               it will either show/hide relevant information
*/
function paymentInfo() {
  const select = document.querySelectorAll('#payment')[0];
  const selectSecond = select.children[1];
  const creditCard = document.querySelector('#credit-card');
  const paypal = document.querySelector('#paypal');
  const bitcoin = document.querySelector('#bitcoin');
  const creditCardBox = document.querySelector('.credit-card-box');

  paypal.hidden = true;
  bitcoin.hidden = true;


  selectSecond.selected =true;

  select.addEventListener('change' , e =>{
    if(paypal.id === e.target.value){
      paypal.hidden =false;
      bitcoin.hidden = true
    } else if(bitcoin.id === e.target.value){
      bitcoin.hidden = false;
      paypal.hidden =true;
    } else{
      bitcoin.hidden = true;
      paypal.hidden =true;
    } if(bitcoin.id === e.target.value || paypal.id === e.target.value ){
      creditCardBox.style.display = 'none';
    } else{
      creditCardBox.style.display ='flex'
    }
  })
}
paymentInfo();
//calling paymentInfo

/**
*@function formValidator
*@description - this function stops the form from being submitted when required
*               information and displays error text when a form isn't filled out
*/
function formValidator(){

  function nameValidator() {
    const nameValue = name.value;
    const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameValue);
    return nameIsValid;
  }
  function emailValidator(){
    const emailValue = email.value;
    const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);
    return emailIsValid;
  }
  function creditCardValidator() {
    const creditCardValue = creditCard.value;
    const creditCardIsValid = /^\D*(\d{4})\D*(\d{4})\D*(\d{4})\D*(\d{4})\D*$/.test(creditCardValue);
    return creditCardIsValid;
}
  function zipCodeValidator(){
    const zipCodeValue = zipCode.value;
    const zipCodeValid = /^\d{5}$/.test(zipCodeValue)
    return zipCodeValid;
  }
  function cvvValidator(){
    const cvvValue = cvv.value;
    const cvvIsValid = /^\d{3}$/.test(cvvValue);
    return cvvIsValid;
  }

  form.addEventListener('submit', e=>{

    if(!nameValidator()){
      e.preventDefault()
    }else if(!emailValidator()){
      e.preventDefault()
    } else if(!creditCardValidator()){
      e.preventDefault()
    }else if(!zipCodeValidator()){
      e.preventDefault();
    }else if(!cvvValidator()){
      e.preventDefault()
    }

    if(!nameValidator()){
      name.classList.add('not-valid');
      name.classList.remove('valid');
      name.parentNode.lastElementChild.style.display = 'block';
    } else if(nameValidator()){
      name.classList.add('valid');
      name.classList.remove('not-valid');
      name.parentNode.lastElementChild.style.display = 'none';
    } if(!emailValidator()){
      email.classList.add('not-valid');
      email.classList.remove('valid');
      email.parentNode.lastElementChild.style.display = 'block';
    } else if(emailValidator()){
      email.classList.add('valid');
      email.classList.remove('not-valid');
      email.parentNode.lastElementChild.style.display = 'none';
    }  if(!creditCardValidator()) {
      creditCard.classList.add('not-valid');
      creditCard.classList.remove('valid');
      creditCard.parentNode.lastElementChild.style.display ='block'
    } else if(creditCardValidator()) {
      creditCard.classList.add('valid');
      creditCard.classList.remove('not-valid');
      creditCard.parentNode.lastElementChild.style.display = 'none';
    }  if(!zipCodeValidator()) {
      zipCode.classList.add('not-valid');
      zipCode.classList.remove('valid');
      zipCode.parentNode.lastElementChild.style.display = 'block';
    } else if(zipCodeValidator()) {
      zipCode.classList.add('valid');
      zipCode.classList.remove('not-valid');
      zipCode.parentNode.lastElementChild.style.display = 'none'
    }  if(!cvvValidator()) {
      cvv.classList.add('not-valid');
      cvv.classList.remove('valid');
      cvv.parentNode.lastElementChild.style.display = 'block'
    } else if(cvvValidator()){
      cvv.classList.add('valid');
      cvv.classList.remove('not-valid');
      cvv.parentNode.lastElementChild.style.display = 'none'
    }
  })
}
formValidator()
//calling formValidator

/**
*@function checkboxFocus
*@description - when a checkbox is clicked the parent of the checkbox will be given
*               the 'focus' class name
*/
function checkboxFocus(){
  const checkbox = document.querySelectorAll('input[type="checkbox"]');

  for(let i = 0; i < checkboxes.length; i++){

    checkbox[i].addEventListener('click', () =>{
      if(checkbox[i].checked){
      checkbox[i].parentNode.classList.add('focus')
    } else{
      checkbox[i].parentNode.classList.remove('focus')
    }
    })
  }
}
checkboxFocus()
//calling checkboxFocus
