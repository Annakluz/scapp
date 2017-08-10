const $form         =   $("#form");
const $name         =   $("#name");
const $email        =   $("#email");
const $password     =   $("#password");
const $passConfirm  =   $("#passConfirm");
const $continue     =   $("#continue")
const $emailVal     =   $email.val();

let loadPage = () => {
    $form.submit(prevent);
   
}  

let prevent = (e) => {
    e.preventDefault();
}





$(document).ready(loadPage);