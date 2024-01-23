var btn=document.getElementById('close')
btn.addEventListener('click',function(){
leftdiv.setAttribute('style','width:0px')
})
var openbtn=document.getElementById('open')
openbtn.addEventListener('click',function(){
   leftdiv.setAttribute('style','width: 250px')

   })

var leftdiv=document.getElementById('leftMenu')
// leftdiv.addEventListener('click',function(){
//    console.log('hi3')
//    })


var cdiv=document.getElementById('hcontact')
// cdiv.addEventListener('click',function(){
//    console.log('hi4')
//    })


$('.toggle1').click(function(){
$('.innerfirst').slideToggle(1000)



})
$('.toggle2').click(function(){
$('.inner2').slideToggle(1000)



})
$('.toggle3').click(function(){
$('.inner3').slideToggle(1000)



})
$('.toggle4').click(function(){
$('.inner4').slideToggle(1000)



})



var textarea=document.getElementById('tarea')
var numtext=document.getElementById('chars')
var mm=textarea.getAttribute('maxlength');
textarea.oninput=function(){
   numtext.innerHTML=mm-this.value.length;
   if(numtext.innerHTML==0){
numtext.classList.add('zero')
   }
   else{
      numtext.classList.remove('zero')
  
   }
}
