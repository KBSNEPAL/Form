const signUp= document.querySelector(".form1");
const signIn= document.querySelector(".form2");

const signin =()=>{
    signUp.style.opacity = "0";
    signIn.style.opacity = "1";
    signIn.style.zIndex = "999";
    signUp.style.zIndex = "1";
}

const signup =()=>{
    signIn.style.opacity = "0";
    signUp.style.opacity = "1";
    signUp.style.zIndex = "999";
    signIn.style.zIndex = "1";
   
}