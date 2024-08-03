var formfield = document.getElementById('formfield');

function add(){
   var newField = document.createElement('input');
   var email = document.createElement('input');
   var Name = document.createElement('input');
   Name.setAttribute('type','text');
  Name.setAttribute('name','text');
  Name.setAttribute('class','text');
  Name.setAttribute('siz',50);
  Name.setAttribute('placeholder','Name');
  newField.setAttribute('type','text');
  newField.setAttribute('name','text');
  newField.setAttribute('class','text');
  newField.setAttribute('siz',50);
  newField.setAttribute('placeholder','Address');
  email.setAttribute('type','text');
  email.setAttribute('name','text');
  email.setAttribute('class','text');
  email.setAttribute('siz',50);
  email.setAttribute('placeholder','Email');
  formfield.appendChild(Name);
  formfield.appendChild(email);
  formfield.appendChild(newField);
}

function remove(){
  var input_tags = formfield.getElementsByTagName('input');
  if(input_tags.length > 3) {
    formfield.removeChild(input_tags[(input_tags.length) - 1]);
    formfield.removeChild(input_tags[(input_tags.length) - 1]);
    formfield.removeChild(input_tags[(input_tags.length) - 1]);
  }
}
let poppup=document.getElementById("poppup");
function openPopup(){
   poppup.classList.add("open-poppup");
}
function closePopup(){
   poppup.classList.remove("open-poppup");
}