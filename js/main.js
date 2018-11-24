function boldFunction()
{
    var elemnt=document.getElementById("demo");
    elemnt.classList.toggle("bold");
}
function italicFunction()
{
    var elemnt=document.getElementById("demo");
    elemnt.classList.toggle("italic");
}
function underlineFunction()
{
    var elemnt=document.getElementById("demo");
    elemnt.classList.toggle("underline");
}
function myFunction()
{
    var x = document.getElementById("mySelect").value;
    document.getElementById("demo").style.fontFamily= x ; 
  
}
function urFunction()
{
    var y = document.getElementById("urSelect").value;
    document.getElementById("demo").style.fontSize= y ; 
}
