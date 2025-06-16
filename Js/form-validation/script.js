const form=document.querySelector(".myform");
const mail=document.getElementById("mail");
const country=document.getElementById("country");
const postalCode=document.getElementById("postal-code");
const password=document.getElementById("pass");

form.addEventListener("submit" , (e)=>{
 e.preventDefault();
    if(form.checkValidity()){
        console.log("valid");
        alert("submitted");
        form.remove();
    }
    else{
        console.log("invalid");
        showError();
    }
});

function showError(){
    const inputs=document.querySelectorAll("input");
    const errors=document.querySelectorAll(".error");
    
    inputs.forEach((input,index)=>{
        const errorSpan=errors[index];

        if(!input.validity.valid){
            if(input.validity.valueMissing){
                errorSpan.textContent="This field is required";
            }
            else if(input.validity.typeMismatch){
                errorSpan.textContent="Please enter a valid format";
            }
            else if(input.validity.tooShort){
                errorSpan.textContent=`Minimum ${input.minLength} characters required`;
            }
            else if(input.validity.patternMismatch) {
                errorSpan.textContent="Invalid format";
            }
            input.classList.add("invalid");

        }
        else{
            errorSpan.textContent="";
            input.classList.remove("invalid");
        }
    });

}