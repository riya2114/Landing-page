let allSection = document.querySelectorAll(".container");
let links = document.querySelectorAll(".link");
let nameInput = document.querySelector(".name");
let numberInput = document.querySelector(".number");
let passwordInput = document.querySelector(".password");
let confirmPasswordInput = document.querySelector(".confirm_password");
let signupButton = document.querySelector(".signup-button button");

window.onscroll = () =>{
    allSection.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>=offset && top<offset+height){
            links.forEach(link=>{
                link.classList.remove('active');
                if(link.getAttribute('href')===`#${id}`){
                    link.classList.add('active');
                }
            })
        }
    })
};

signupButton.addEventListener("click", () => {
    if (validateForm()) {
        alert("Signup successful");
    }
    nameInput.value="";
    numberInput.value="";
    passwordInput.value="";
    confirmPasswordInput.value="";
});

function validateForm() {
    if (!checkNumber()) {
        return false;
    }
    if (!checkPasswordsMatch()) {
        return false;
    }
    return true;
}

function checkNumber() {
    if (numberInput.value.length === 10) {
        return true;
    } else {
        alert("Number should be 10 digits!");
        return false;
    }
}
function checkPasswordsMatch() {
    if (passwordInput.value !== confirmPasswordInput.value) {
        alert("Passwords do not match!");
        return false;
    }
    if(passwordInput.value.length<5 || confirmPasswordInput.value.length<5){
        alert("password length should be greater than 5");
        return false;
    }
    return true;
}