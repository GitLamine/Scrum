var cart3=document.getElementById("cart3");
var shop3=document.getElementById("shop3");
var reserver2=document.getElementById("reserver2");
var cartcontainer3=document.getElementById("cartcontainer3");
var panier3=document.getElementById("panier3");
var pasdereservation3=document.getElementById("pasdereservation3");
var articles3=document.getElementById("articles3");
var montantdiv=document.getElementById("montantdiv");
var montant=document.getElementById("montant");
var validerdiv=document.getElementById("validerdiv");







var modal3=document.getElementById("modal3");
var close3=document.getElementById("close3");
var btn3=document.getElementById("btn3");
var main3=document.getElementById("main3");
var message3=document.getElementById("message3");
var submit3=document.getElementById("mybutton3");
var modalsuccess3=document.getElementById("modalsuccess3");
var okbutton3=document.getElementById("okbutton3");
var create3=document.getElementById("create3");
var signup3=document.getElementById("signup3");
var signin3=document.getElementById("signin3");






var i=0;



reserver2.addEventListener('click',function(){
    shop3.style.display='block';
    cart3.innerHTML=i+1;
    pasdereservation3.style.display="none";
    articles3.style.display='block';
    montantdiv.style.display='block';
    montant.textContent='180$';
    montant.style.color='brown';
    montant.style.fontSize='20px';
    validerdiv.style.display='block';
});

panier3.addEventListener('mouseover',function(){

    cartcontainer3.style.display='block';
    
});
cartcontainer3.addEventListener('mouseover',function(){
    this.style.display='block';
});
cartcontainer3.addEventListener('mouseout',function(){
    this.style.display='none';
});






btn3.addEventListener('click', function(){
    modal3.style.display="block";

});
create3.addEventListener('click',function(){
    signin3.style.display='none';
    signup3.style.display='block';

});
close3.addEventListener('click',function(){
    modal3.style.display="none";
    signin3.style.display="block";
    signup3.style.display="none";
});

window.addEventListener('click',function(e){
    if(e.target==modal3){
    modal3.style.display="none";
    signin3.style.display="block";
    signup3.style.display="none";
    }
  

});


submit3.addEventListener('click',function(e){
    
    e.preventDefault();
    var password3=document.getElementById('password3');
    var confirm3=document.getElementById('confirm3');
    if(password3.value!=confirm3.value){
        message3.textContent="Passwords don't match ";
        password3.style.borderColor='red'
        confirm3.style.borderColor='red';

        message3.style.color='red';
    }
    else{
        modal3.style.display="none";
        modalsuccess3.style.display='block';




    }

});

okbutton3.addEventListener('click',function(){
    modalsuccess3.style.display='none';
});
