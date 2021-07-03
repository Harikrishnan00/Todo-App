
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

let iContent=document.querySelector("#input-content")
let add=document.querySelector("#add")
let list=document.querySelector("#active-list")
let userName=JSON.parse(localStorage.getItem('userName'));
let lOut=document.querySelector("#logout")
let activeNum=document.querySelector("#active-numbers")
let hName=document.querySelector("#head-name")


window.addEventListener("load",getData)

function getData(){
  firebase.firestore().collection("users").doc(userName).get().then(obj=>{
    let length=obj.data().content.length
    activeNum.innerText=length
    hName.innerText=obj.data().fName
    let html=""
    
    obj.data().content.forEach((data,index)=>
          html += `<li><input type="checkbox" class="checkbox" onclick="line()" ><p class="content">${data}</p></li>`
    )
    obj.data().content.reverse()
    list.innerHTML=html 
})
}
add.addEventListener("click",addList,{once:false})

function addList(){
  if(iContent.value!=""){
    firebase.firestore().collection("users").doc(userName).update({
      content:firebase.firestore.FieldValue.arrayUnion(iContent.value)
  })
    let num=parseInt(activeNum.innerText)
    activeNum.innerText=num+1 
    getData()
  }
  else{
    alert("Enter a value")
  }
  iContent.value=null
}

lOut.addEventListener("click",logOut)

function logOut(){
  localStorage.removeItem("userName")
  window.location.href="../login/login.html"
}



