var firebaseConfig = {
    apiKey: "AIzaSyD6XTfktD7j2orRUuuqhFTjuKtrM1jcy0I",
    authDomain: "todo-64713.firebaseapp.com",
    projectId: "todo-64713",
    storageBucket: "todo-64713.appspot.com",
    messagingSenderId: "530792824336",
    appId: "1:530792824336:web:9d4a4dc22d72f9be40d495",
    measurementId: "G-PKTNK0TMJS"
  };
firebase.initializeApp(firebaseConfig);

let nameOfUser=document.querySelector("#name")
let uName=document.querySelector("#username")
let pass=document.querySelector("#password")
let cPass=document.querySelector("#c-password")
let sUp=document.querySelector("#signUp")

uName.addEventListener("focusout",checkUser)
function checkUser(){
    firebase.firestore().collection("users").get().then(snapshot=>{
        snapshot.docs.forEach(doc=>{
           let id=doc.id
            {
                if(uName.value==id){
                    alert("Allready exist")
                }
            }   
        })
    })
}
sUp.addEventListener("click",addDetails)

function addDetails(){
    if(pass.value==cPass.value){
        firebase.firestore().collection("users").doc(uName.value).set({
            fName:nameOfUser.value,
            userName:uName.value,
            password:cPass.value,
            content:[]
        })
        nameOfUser.value=null
        uName.value=null
        pass.value=null
        cPass.value=null
        alert("please login to continue..") 
    }
    else{
        alert("enter same password")
        pass.value=null
        cPass.value=null
    }
}
