

// Inputs
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const password = document.getElementById('password');
// Button
const button = document.querySelector('.claim-btn')



button.addEventListener('click', function(){

    if (name.value.length === 0){
        name.style.border = 'solid 2px red';
        name.placeholder = "First Name cannot be empty";
        name.style.backgroundImage = "url(images/icon-error.svg)";
        name.style.backgroundRepeat = "no-repeat";
        name.style.backgroundPosition = "95% 50%";
        name.classList.add("colored-placeholder");
        

    }else {
        name.style.border = "solid 1px hsl(246, 25%, 77%)";
        name.style.backgroundImage = none;
    }
    
})


button.addEventListener('click', function(){

    if (surname.value.length === 0){
        surname.style.border = 'solid 2px red';
        surname.placeholder = "Surname cannot be empty";
        surname.style.backgroundImage = "url(images/icon-error.svg)";
        surname.style.backgroundRepeat = "no-repeat";
        surname.style.backgroundPosition = "95% 50%";
        surname.classList.add("colored-placeholder");
        

    }else {
        surname.style.border = "solid 1px hsl(246, 25%, 77%)";
        surname.style.backgroundImage = none;
    }
})



button.addEventListener('click', function(){

    if (password.value.length === 0){
        password.style.border = 'solid 2px red';
        password.placeholder = "Password cannot be empty";
        password.style.backgroundImage = "url(images/icon-error.svg)";
        password.style.backgroundRepeat = "no-repeat";
        password.style.backgroundPosition = "95% 50%";
        password.classList.add("colored-placeholder");
        

    }else {
        password.style.border = "solid 1px hsl(246, 25%, 77%)";
        password.style.backgroundImage = none;
    }
})







button.addEventListener('click', function(){
    



    if (email.value.length === 0) {
        email.style.border = 'solid 2px red';
        email.placeholder = "Looks Like this is not an email";
        email.style.backgroundImage = "url(images/icon-error.svg)";
        email.style.backgroundRepeat = "no-repeat";
        email.style.backgroundPosition = "95% 50%";
        email.classList.add("colored-placeholder");
        

    }else {
        password.style.border = "solid 1px hsl(246, 25%, 77%)";
        password.style.backgroundImage = none;
    }

   
});












