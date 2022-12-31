const inputs =  document.querySelectorAll("input");

const passwordOne = document.querySelector("#password");
const passwordOneValidationText = document.querySelector("p.password");

const passConfirm = document.querySelector("#password2");
const passConfirmValidationText = document.querySelector("p.password2");
passConfirm.disabled = true;


inputs.forEach(input =>
    input.addEventListener('blur', () =>
    validate(input))
    );

inputs.forEach(input =>
    input.addEventListener('input', () =>
    resetValidity(input))
    );



function validate(input){

    if(!input.value){
        resetValidity(input);
        return
    }

    if (input.id.includes("pass")){
        checkPasswords(input);
        return
    }

    if (input.checkValidity()){
        setValid(input);
        console.log("Validating");
    } else setInvalid(input);
}   


function setValid(input){
    let validationText = document.querySelector(`p.${input.id}`);
    input.classList.remove("invalid");
    input.setCustomValidity('');
    validationText.innerHTML = "&#9989";
}


function setInvalid(input){
    let validationText = document.querySelector(`p.${input.id}`);
    input.classList.add("invalid");
    input.setCustomValidity(input.dataset.errormsg);
    validationText.innerHTML = input.dataset.errormsg;
}


function checkPasswords(password){

    if(password.id == "password"){
        if(password.checkValidity()){
            passConfirm.disabled = false;
            setValid(password);
        } else {
            passConfirm.disabled = true;
            passConfirm.value = ''
            passConfirmValidationText.innerHTML = '&nbsp';
            setInvalid(password);
        }
    }

    if(password.id == "password2"){
        if(passwordOne.value == passConfirm.value){
            setValid(password);
        } else {
            setInvalid(password);
        }
    }
}


function resetValidity(input){
    console.log("Resetting Validity");
    let validationText = document.querySelector(`p.${input.id}`);

    if(input.id == "password" && input.value.length > 8){
        checkPasswords(input);
    }

    input.classList.remove("invalid");
    input.setCustomValidity('');
    validationText.innerHTML = "&nbsp";
}

