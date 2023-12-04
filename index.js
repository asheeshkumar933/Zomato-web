// login  code here

function login(event) {
  document.getElementById("id01").style.display = "block";
}

let modal = document.getElementById("id01");

window.addEventListener('click',function(event){
  if (event.target == modal) {
    modal.style.display = "none";
  }


})
  

document.getElementById('login').addEventListener('click' ,login )
document.getElementById('signin').addEventListener('click' ,Signup )

// validation cheack

function cheack() {

  let x = document.getElementById("numb").value;
  // If x is Not a Number or blank input field
  let text;
  if (isNaN(x) ||x==="") {
    
    text = " invalid Input";
   
   
  } else {
  
  document.getElementById('demo').innerHTML =  getRndInteger(1000,9999)


  
  }
  document.getElementById("demo1").innerHTML = text;
}
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// submit button


function validateForm() {
  let x = document.forms ["uform"]["oname"].value;
  if (x==="") {
    alert(" OTP is  required");
   
  }
  else{
    confirm(" Login is succesfull Click the ok button");
    // window.location.pathname =
    //  "./website/afterlogin.html";
    window.location.href ="./afterlogin.html"
    
   
  }
  return false;
}

// login code ends here





// sign up code here
function Signup() {
  document.getElementById("id02").style.display = "block";
}



let modal2 = document.getElementById("id02");


window.addEventListener('click',function(event){
  if (event.target == modal1) {
    modal1.style.display = "none";
  }


})
 

// form SIGN UP 
  function signvalidateForm() {
    let x = document.forms ["myform"]["psw"].value;
    if (true) {
     
      alert(" sign up is succesfull ");
      
    
      window.location.assign('http://127.0.0.1:5501/afterlogin.html')
     
     
    }
    
    return false;
  }

//index.html page item list 
  
   let item_explor=document.querySelectorAll('#item_explor')
       item_explor.forEach( (item)=> {
    console.log(item);
    item.addEventListener('click', ()=>{
      alert('please Log in & Sign up first and explor more item')
    })
  });


// order submit logic

  let order_page=document.getElementById('id03')

//   let modal = document.getElementById("id01");

// window.addEventListener('click',function(event){
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }


// })
  
  let order_button=document.querySelectorAll('.box')

order_button.forEach((order_buttons)=>{
 
order_buttons.addEventListener('click',function(event){
 
  order_page.style.display = 'block'

});
})





















