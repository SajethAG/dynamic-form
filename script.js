var formfield = document.getElementById('formfield');

function add(){
   var newField = document.createElement('input');
   var email = document.createElement('input');
   var Name = document.createElement('input');
   Name.type="text";
  Name.placeholder="Name";
  newField.type="text";
  newField.placeholder="Address";
  email.type="text";
  email.placeholder="Email";
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