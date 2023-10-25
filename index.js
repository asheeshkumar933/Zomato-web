// log in code here

function login(event) {
  document.getElementById("id01").style.display = "block";
}

let modal = document.getElementById("id01");

window.addEventListener('click',function(event){
  if (event.target == modal) {
    modal.style.display = "none";
  }


})






// sign up code here
function Signup() {
  document.getElementById("id02").style.display = "block";
}

// Get the modal1

let modal1 = document.getElementById("id02");
// window.onclick = function (event) {
//   if (event.target == modal1) {
//     modal1.style.display = "none";
//   }
// };

window.addEventListener('click',function(event){
  if (event.target == modal1) {
    modal1.style.display = "none";
  }


})
 

// sign up code ends here


// pizza page jump  code
 let pizza=document.querySelectorAll('#pizza')
pizza.forEach(function(e){
  
  e.addEventListener('click' ,function(){
    // window.location.pathname =
    // "./add to cart/pizza_addtocart.html";

    window.location.href='http://127.0.0.1:5500/add%20to%20cart/pizza_addtocart.html';
      
 
  })
})
 let biryani=document.querySelectorAll('#biryani')
biryani.forEach(function(e){
  
  e.addEventListener('click' ,function(){
    window.location.pathname =
    "./add to cart/Biryani.html";
    // window.location.href='http://127.0.0.1:5501/add%20to%20cart/Biryani.html'
   
  })
})
 let burger=document.querySelectorAll('#Burger')
burger.forEach(function(e){
  
  e.addEventListener('click' ,function(){
    window.location.pathname =
    "./add to cart/Burger.html";
    // window.location.href='http://127.0.0.1:5501/add%20to%20cart/Burger.html'
    
  
  })
})




// validation cheack

function cheack() {
    // Get the value of the input field with id="numb"
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
      window.location.pathname =
       "./website/afterlogin.html";
      // window.location.href='http://127.0.0.1:5500/afterlogin.html'
     
    }
    return false;
  }

// form SIGN UP 
  function signvalidateForm() {
    let x = document.forms ["myform"]["psw"].value;
    if (true) {
     
      alert(" sign up is succesfull ");
      window.location.pathname =
      "./website/afterlogin.html";
      // window.location.href='http://127.0.0.1:5501/afterlogin.html'
     
     
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



















