const indicator = document.querySelector(".indicator");
const input = document.querySelector("input");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".text");
const showBtn = document.querySelector(".showButton");

let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)][A-Z]/;

function isWeak(input){
    return (input.value.length <= 3 && (input.value.match(regExpWeak) || input.value.match(regExpMedium) || input.value.match(regExpStrong)));
}

function isMedium(input){
    return (input.value.length >= 6 && ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) || (input.value.match(regExpMedium) && input.value.match(regExpStrong)) || (input.value.match(regExpWeak) && input.value.match(regExpStrong))));
}

function isStrong(input){
    return (input.value.length >= 6 && input.value.match(regExpWeak) && input.value.match(regExpMedium) && input.value.match(regExpStrong));
}

function evaluatePassword(input){

    if(isWeak(input)) no = 1;
    if(isMedium(input)) no = 2;
    if(isStrong(input)) no = 3;

    return no;
}

function handlePassword(){
    if(input.value != ""){

        indicator.style.display = "block";
        indicator.style.display = "flex";

        no = evaluatePassword(input);

        if(no==1){

            weak.classList.add("active");
            text.style.display = "block";
            text.textContent = "Your password is too week";
            text.classList.add("weak");
        }

        if(no==2){

            medium.classList.add("active");
            text.textContent = "Your password is medium";
            text.classList.add("medium");
        }else{

            medium.classList.remove("active");
            text.classList.remove("medium");
        }

        if(no==3){

            weak.classList.add("active");
            medium.classList.add("active");
            strong.classList.add("active");
            text.textContent = "Your password is strong";
            text.classList.add("strong");
        }else{

            strong.classList.remove("active");
            text.classList.remove("strong");
        }

        showBtn.style.display = "block";
        showBtn.onclick = function(){
            
            if(input.type == "password"){
                input.type = "text";
                showBtn.textContent = "HIDE";
                showBtn.title = "Hide password";
                showBtn.style.color = "#23ad5c";
            }else{
                input.type = "password";
                showBtn.textContent = "SHOW";
                showBtn.title = "Show password";
                showBtn.style.color = "#000";
            }
        }
    }
    else{
        indicator.style.display = "none";
    }
}