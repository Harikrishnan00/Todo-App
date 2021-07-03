let em=document.querySelector("#email")
let pass=document.querySelector("#password")
let ad=document.querySelector("#add")
let sh=document.querySelector("#show")
let dum=document.querySelector("#dummy")
let name1=document.querySelector("#name")
let add=document.querySelector("#add1")

// em.addEventListener("focusout",()=>{
//    firebase.firestore().collection("users").get().then(snapshot=>{
//         snapshot.docs.forEach(doc=>{
//           if(em.value==doc.id){
//             alert("allready exist")
//           }
//         })
//    })
// })

ad.addEventListener("click", addData);


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

function addData(){
    firebase.firestore().collection("users").doc(em.value).set({
    emailOfuser:em.value,
    password:pass.value,
    todo:{
      1:hari
    }
  })
}







