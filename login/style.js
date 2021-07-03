const signUpFrame=document.querySelector("#overlay-signup")
const signUp=document.querySelector("#show-signup")
const signInFrame=document.querySelector("#overlay-signin")
const signIn=document.querySelector("#sign-in")

signUp.onclick=()=>{
    signUpFrame.style.display="none"
    signInFrame.style.display="flex"
}
signIn.onclick=()=>{
    signUpFrame.style.display="flex"
    signInFrame.style.display="none"
}

