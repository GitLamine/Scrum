var modal=document.getElementById("modal");
var close=document.getElementById("close");
var btn=document.getElementById("btn");
var main=document.getElementById("main");
var message=document.getElementById("message");
var submit=document.getElementById("mybutton");
var modalsuccess=document.getElementById("modalsuccess");
var okbutton=document.getElementById("okbutton");
var create=document.getElementById("create");
var signup=document.getElementById("signup");
var signin=document.getElementById("signin");






var cart=document.getElementById("cart");
var shop=document.getElementById("shop");
var accueil1=document.getElementById("accueil1");
var panier=document.getElementById("panier");
var cartbox=document.getElementById("cartbox");
var cartcontainer=document.getElementById("cartcontainer");
var reserver1=document.getElementById("reserver1");
var reserver2=document.getElementById("reserver2");





var modalrecette=document.getElementById("modalrecette");
var boutonrecette=document.getElementById('boutonrecette');
var accueil2=document.getElementById("accueil2");

panier.addEventListener('mouseover',function(){

    cartcontainer.style.display='block';
    
});
cartcontainer.addEventListener('mouseover',function(){
    this.style.display='block';
});
cartcontainer.addEventListener('mouseout',function(){
    this.style.display='none';
});




boutonrecette.addEventListener('click',function(){
    
    accueil1.style.display="none";
    accueil2.style.display="block";

});


btn.addEventListener('click', function(){
    modal.style.display="block";

});
create.addEventListener('click',function(){
    signin.style.display='none';
    signup.style.display='block';

});
close.addEventListener('click',function(){
    modal.style.display="none";
    signin.style.display="block";
    signup.style.display="none";
});

window.addEventListener('click',function(e){
    if(e.target==modal){
    modal.style.display="none";
    signin.style.display="block";
    signup.style.display="none";
    }
  

});


submit.addEventListener('click',function(e){
    
    e.preventDefault();
    var password=document.getElementById('password');
    var confirm=document.getElementById('confirm');
    if(password.value!=confirm.value){
        message.textContent="Passwords don't match ";
        password.style.borderColor='red'
        confirm.style.borderColor='red';

        message.style.color='red';
    }
    else{
        modal.style.display="none";
        modalsuccess.style.display='block';




    }

});

okbutton.addEventListener('click',function(){
    modalsuccess.style.display='none';
});


















