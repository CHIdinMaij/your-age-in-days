function ageInDays(){
   var birthYear=prompt("what year were you born?");
 var yourAgeInDays = (2018 - birthYear) * 365;
   var h1 =document.createElement('h1');
   var textAnswer=document.createTextNode('you are' + yourAgeInDays +' days');
   h1.setAttribute('id', 'ageInDays');
   h1.appendChild(textAnswer);
   document.getElementById('flex-result').appendChild(h1);
   
}
function reset(){
   document.getElementById('ageInDays').remove();}
