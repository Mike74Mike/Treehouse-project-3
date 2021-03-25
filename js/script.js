const form =document.querySelector('form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const activities = document.querySelector('#activities');
const select = document.querySelector('#payment');
const checkboxes = document.querySelectorAll('#activities input');
const creditCard = document.querySelector('#cc-num');
const zipCode = document.querySelector('#zip');
const cvv = document.querySelector('#cvv');



const focusName = () => {
  document.querySelector('#name').focus();
}
focusName();

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

function paymentInfo() {
  const select = document.querySelectorAll('#payment')[0];
  const selectSecond = select.children[1];
  const creditCard = document.querySelector('#credit-card');
  const paypal = document.querySelector('#paypal');
  const bitcoin = document.querySelector('#bitcoin');

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
    }
  })
}
paymentInfo();

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

  })



}
formValidator()

function formValidation(){
  const checkbox = document.querySelectorAll('input[type="checkbox"]');
  console.log(checkbox.parentElement)
  for(let i = 0; i < checkboxes.length; i++){
    checkbox.addEventListener('focus', e =>{
      e.parentNode.classList.add('focus')
    })
    checkbox.addEventListener('blur', e =>{
      e.parentNode.classList.remove('focus')
    })
  }
}
formValidation()
